import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import ImgCarousel from './carousel';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class ParkInfo extends Component {
    state = {
        park: []
    };
    componentDidMount() {
        const { selectedPark } = this.props.location.state;
        this.setState({ park: selectedPark });
    }

    render() {
        return (
            <Container>
                <h1>Park Info</h1>
                <Row>
                    <Card>
                        <CardBody>
                            <CardTitle>Park Name</CardTitle>
                            {/* <ImgCarousel/> */}

                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default ParkInfo;