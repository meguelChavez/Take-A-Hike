import React from 'react';

import { Row, Col } from 'reactstrap';
import Address from '../components/address';


const AdditionalInfo = (props) => {
    return (
        <React.Fragment>
            <Row className="mb-3">
                <Col sm="12" md="7">
                    <h5>Park Hours:</h5>
                    <Row>
                        <Col sm="12" md="7">
                            <p>{props.operatingHours[0].description}</p>
                        </Col>
                        <Col sm="12" md="5">
                            <ul>
                                {props.printInfo(props.operatingHours[0].standardHours).map((element, i) => (
                                    <li key={i}>{element}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm="12" md="5">
                    {/* <Row> */}
                    {/* <Col sm="12"> */}
                    <h5>{`${props.entranceFees[0].title} :`}</h5>
                    {/* <Row></Row> */}
                    <p>{`$${parseInt(props.entranceFees[0].cost).toFixed(2)} `}</p>
                    {/* </Col> */}
                    <Col sm="12" className="mt-5">
                        <h5>Additional Info :</h5>
                        <Address address={props.addresses} contacts={props.contacts} directionsUrl={props.directionsUrl} />
                    </Col>
                    {/* </Row> */}
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdditionalInfo;