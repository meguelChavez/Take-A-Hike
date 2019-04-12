import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import ParkCard from '../components/parkCard';



class HomePage extends Component {
    state = {
        stateCode: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
        chosenSC: "",
        keyword: "",
        isLoading: false,
        parks: []
    }

    // getParks = (parkArr) => {
    //     this.setState({ parks: parkArr });
    // }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = (event) => {
        this.setState({ isLoading: true })
        const { keyword, chosenSC } = this.state;
        console.log("clicked");
        console.log(keyword, chosenSC)
        axios.get("/search", {
            params: {
                keyword,
                chosenSC
            }
        }).then((res) => {
            this.setState({ isLoading: false })
            const parkArr = res.data.data;
            //   this.props.getParks(parkArr)
            this.setState({ parks: res.data.data });
            console.log(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { stateCode, keyword, chosenSC, isLoading } = this.state;
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1 id="searchLabel" className="align-middle">Find a Park Near You</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <SearchBar
                            loading={isLoading}
                            chosenSC={chosenSC}
                            keyword={keyword}
                            stateCode={stateCode}
                            getParks={this.getParks}
                            handleInputChange={this.handleInputChange}
                            handleSearch={this.handleSearch}
                        />
                        <p className="lead">
                            Get back to nature and search for parks near you. Find features, hours
                            and directions.
                        </p>
                    </Col>
                </Row>
                <Row className="parks">
                    {this.state.parks ?
                        this.state.parks.map((element, i) => (
                            <ParkCard key={i} park={this.state.parks[i]} />))
                        : ""}
                </Row>
            </Container>
        );
    }
}
export default HomePage;