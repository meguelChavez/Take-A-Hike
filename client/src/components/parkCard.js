import React from 'react';
import { Link } from "react-router-dom";
import ImgCarousel from './carousel';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const parkCard = (props) => {
  return (
    <Card className="col-md-4 col-sm-12 mb-5 parkCard">
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
            <Link to={{
              pathname: "/parkinfo",
              state: {
                selectedPark: props.park,
                images: props.park.images
              }
            }}>
              <Button className="btn-success">Learn More</Button>
            </Link>

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
    </Card>
  );
};

export default parkCard;