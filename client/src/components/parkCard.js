import React from 'react';
import ImgCarousel from './carousel';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const parkCard = (props) => {
  // if (props.park.images) {
  //   const items = props.park.images.map((element) => (
  //     {
  //       src: element.url,
  //       altText: element.altText,
  //       caption: element.caption,
  //       header: element.title
  //     }
  //   ));
  // }
  console.log(`items ${props}`);
  return (
    <Card className="col-md-4 col-sm-12 mb-5">
      <CardBody>
        {(props.park) ?
          (<React.Fragment>
            <CardTitle>{props.park.fullName}</CardTitle>
            <ImgCarousel className="parkImg" items={props.park.images.map((element) => (
              {
                src: element.url,
                altText: element.altText,
                caption: element.caption,
                header: element.title
              }
            ))} />
            <Button className="btn-success">Learn More</Button>
          </React.Fragment>
          )
          : (
            <React.Fragment>
              <CardTitle>No results found</CardTitle>
              <CardSubtitle>Try different keyword or state</CardSubtitle>
            </React.Fragment>
          )

        }
      </CardBody>
      {/* quicktime player 
            imovie
        */}
    </Card>
  );
};

export default parkCard;