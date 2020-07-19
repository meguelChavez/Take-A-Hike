import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import ParkCard from '../components/parkCard';



class HomePage extends Component {
    state = {
        stateCode: ["AK", "AR", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "FM", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"],
        chosenSC: "",
        keyword: "",
        isLoading: false,
        searched: false,
        parks: []
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = (event) => {
        console.log("searching!!!")
        this.setState({ isLoading: true, searched: true })
        const { keyword, chosenSC } = this.state;
        axios.get("/search", {
            params: {
                keyword,
                chosenSC
            }
        }).then((res) => {
            console.log(res)
            this.setState({ isLoading: false })
            this.setState({ parks: res.data });
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
                    {(this.state.parks.length > 0) ?
                        this.state.parks.map((element, i) => (
                            <ParkCard key={this.state.parks[i].id} park={this.state.parks[i]} />))
                        : (this.state.searched && !isLoading) ? <ParkCard /> : ""}
                </Row>
            </Container>
        );
    }
}
export default HomePage;