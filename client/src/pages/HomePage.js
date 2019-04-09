import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SearchBar from '../components/searchBar';


class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1 id="searchLabel" className="align-middle">Find a Park Near You</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <SearchBar />
                        <p className="lead">
                            Get back to nature and search for parks near you. Find features, hours
                            and directions.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default HomePage;