import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const InfoList = (props) => {
    let listItems = [];
    for (let key in props.address) {
        if (props.address[key] !== ""){
            listItems.push(`${key}: ${props.address[key]}`)
        }
    }
return (
    <ListGroup>
        {listItems.map((element) => (
            <ListGroupItem>{element}</ListGroupItem>
        ))}
        <ListGroupItem>Cras justo odio</ListGroupItem>
    </ListGroup>
);
}

export default InfoList;