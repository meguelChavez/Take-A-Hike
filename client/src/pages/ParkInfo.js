import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoList from '../components/infoList';
import Address from '../components/address';
import ImgModal from '../components/imgModal';
import ImgCarousel from '../components/carousel';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
// import { type } from 'os';

class ParkInfo extends Component {

    state = {
        park: {},
        images: [],
        isLoaded: false
    };

    componentDidMount() {
        const { selectedPark, images } = this.props.location.state;
        this.setState({ park: selectedPark, isLoaded: true });
        this.makeImgObj(images);
    }

    printInfo = (obj) => {
        let keyArr = []
        for (let key in obj) {
            let keyStr = key;
            let firstLetterCap = keyStr.charAt(0).toUpperCase() + keyStr.slice(1);
            keyArr.push(`${firstLetterCap}: ${obj[key]}`)
        }
        return keyArr;
    }

    makeImgObj = (images) => {
        if (images.length > 0) {
            console.log("making obj")
            let items = []
            items = images.map((element) => (
                {
                    src: element.url,
                    altText: element.altText,
                    caption: element.caption,
                    header: element.title
                }
            ));
            console.log(`map items ${items[0].src}`);
            this.setState({ images: items });
        }
    }

    render() {
        const { fullName, description, addresses, contacts, directionsUrl, entranceFees, images, operatingHours } = this.state.park;
        return (
            <Container>
                <h1 className="heavy">Park Info</h1>
                <Row>
                    <Card className="col-md-12 infoCard">
                        <CardBody>
                            <CardTitle>{fullName}</CardTitle>
                            <CardSubtitle className="mb-3">{description}</CardSubtitle>
                            {/* <img src={this.state.park.images[0].url}/> */}
                            {this.state.isLoaded ?
                                <React.Fragment>
                                    <Row className="mb-3">
                                        {/* <Col sm="12" md="6"> */}
                                        <Col sm="12" md="7">
                                            <h5>Park Hours:</h5>
                                            {/* <p>{operatingHours[0].description}</p> */}
                                            <Row>
                                                <Col sm="12" md="7">
                                                    <p>{operatingHours[0].description}</p>
                                                </Col>
                                                <Col sm="12" md="5">
                                                    <ul>
                                                        {this.printInfo(operatingHours[0].standardHours).map((element, i) => (
                                                            <li key={i}>{element}</li>
                                                        ))}
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm="12" md="5">
                                            {/* <Row> */}
                                            {/* <Col sm="12"> */}
                                            <h5>{`${entranceFees[0].title} :`}</h5>
                                            {/* <Row></Row> */}
                                            <p>{`$${parseInt(entranceFees[0].cost).toFixed(2)} `}</p>
                                            {/* </Col> */}
                                            <Col sm="12" className="mt-5">
                                                <h5>Additional Info :</h5>
                                                <Address address={addresses} contacts={contacts} directionsUrl={directionsUrl} />
                                            </Col>
                                            {/* </Row> */}
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col sm="12" md="6" className="mt-5">
                                            <h5>Additional Info :</h5>
                                            <Address address={addresses} contacts={contacts} directionsUrl={directionsUrl} />
                                        </Col>
                                    </Row> */}
                                </React.Fragment> : ""
                            }
                            <Row>
                                {this.state.isLoaded ? images.map((element, i) => (
                                    <ImgModal key={i} images={element} />
                                    // <img key={i} className="infoImg d-flex justify-content-between mb-3 col-md-3" src={element.url} />
                                )) : ""}
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default ParkInfo;