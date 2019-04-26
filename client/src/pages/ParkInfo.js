import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import AdditionalInfo from '../components/additionalInfo';
import Comments from '../components/comments';
import ImgModal from '../components/imgModal';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
// import { type } from 'os';

class ParkInfo extends Component {

    state = {
        selected: "Images",
        comments: "",
        allComments: [],
        userName: "",
        park: {},
        images: [],
        isLoaded: false
    };

    componentDidMount() {
        const { selectedPark, images } = this.props.location.state;
        // const { parkId } =this.props.location.state.selectedPark;
        this.setState({ park: selectedPark, isLoaded: true });
        this.makeImgObj(images);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getComments = () => {
        axios("/get-comments", {
            params: {
                parkId: this.state.park.id
            }
        })
            .then((res) => {
                const allComments = res.data;
                this.setState({ allComments })
            }).catch(err => console.log(err))
    }

    postComment = (event) => {
        event.preventDefault();
        const { comments, userName, } = this.state;
        const { id, fullName } = this.state.park;
        const data = {
            comments,
            userName,
            parkId: id,
            parkName: fullName
        }
        axios.post("/post-comments", data)
            .then((res) => {
                this.setState({ comments: "", userName: "" })
                this.getComments();
            }).catch(err => console.log(err))
    }

    printInfo = (obj) => {
        let keyArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let key in obj) {
            let keyStr = key;
            let firstLetterCap = keyStr.charAt(0).toUpperCase() + keyStr.slice(1);
            let found = keyArr.findIndex((element) => {
                return element === firstLetterCap;
            })
            keyArr[found] = `${firstLetterCap}: ${obj[key]}`;
        }
        return keyArr;
    }

    selectCategory = (event) => {
        event.preventDefault();
        this.setState({ selected: event.target.textContent })
    }

    makeImgObj = (images) => {
        if (images.length > 0) {
            let items = []
            items = images.map((element) => (
                {
                    src: element.url,
                    altText: element.altText,
                    caption: element.caption,
                    header: element.title
                }
            ));
            this.setState({ images: items });
        }
    }

    render() {
        const { fullName, description, addresses, contacts, directionsUrl, entranceFees, images, operatingHours } = this.state.park;
        return (
            <Container>
                <h1 className="heavy">Park Info</h1>
                <Row>
                    <Card className="col-md-12 infoCard mb-5">
                        <CardBody>
                            <CardTitle>{fullName}</CardTitle>
                            <CardSubtitle className="mb-3">{description}</CardSubtitle>
                            <Row className="d-flex justify-content-around mb-5">
                                <Col sm="10" md="3">
                                    <Button color="success" size="lg" data-state="" onClick={this.selectCategory} active>Images</Button>{' '}
                                </Col>

                                <Col sm="10" md="3">
                                    <Button color="success" size="lg" data-state="" onClick={this.selectCategory} active>Comments</Button>{' '}
                                </Col>

                                <Col sm="10" md="3">
                                    <Button color="success" size="lg" data-state="" onClick={this.selectCategory} active>Additional Info</Button>{' '}
                                </Col>

                            </Row>
                            <Row>
                                {(this.state.isLoaded && (this.state.selected === "Images"))
                                    ? images.map((element, i) => (
                                        <ImgModal key={i} images={element} />
                                    ))
                                    : ""}

                                {(this.state.isLoaded && (this.state.selected === "Additional Info"))
                                    ? <AdditionalInfo
                                        operatingHours={operatingHours}
                                        entranceFees={entranceFees}
                                        addresses={addresses}
                                        contacts={contacts}
                                        directionsUrl={directionsUrl}
                                        printInfo={this.printInfo} /> : ""}

                                {(this.state.isLoaded && (this.state.selected === "Comments"))
                                    ? <Comments
                                        userName={this.state.userName}
                                        comments={this.state.comments}
                                        onChange={this.handleInputChange}
                                        getComments={this.getComments}
                                        postComment={this.postComment}
                                        allComments={this.state.allComments}
                                    />
                                    : ""}
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default ParkInfo;