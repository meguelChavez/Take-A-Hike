import React from 'react';
import ImgCarousel from './carousel';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const parkCard = (props) => {
    const items = props.park.images.map((element) => (
        {src: element.url,
         altText: element.altText,
         caption: element.caption,
         header: element.title
        }
    ));
    console.log(`items ${items}`);
  return (
      <Card className="col-md-4 col-sm-12 mb-5">
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.park.fullName}</CardTitle>
          {/* <CardSubtitle>{`Designation: ${props.park.designation}`}</CardSubtitle> */}
          {/* <CardText>{props.park.description}</CardText> */}
          <ImgCarousel className="parkImg" items={items}/>
          <Button className="btn-success">Learn More</Button>
        </CardBody>
        {/* quicktime player 
            imovie
        */}
      </Card>
  );
};

export default parkCard;