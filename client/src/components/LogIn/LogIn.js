import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LogIn = props => {
  // const [register, toggleRegister] = useState(false);
  const {register} = props
  const handleSignInClick = name => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open(`http://localhost:8080/auth/${name}`, "_self");
  };

  const handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://localhost:8080/auth/logout", "_self");
    // this.props.handleNotAuthenticated();
  };

  const socialBtns = {
    fontSize: "1.5rem"
  };

  return (
    <React.Fragment>
      <Row className="d-flex justify-content-center">
        <Card className="col-12 pl-0 pr-0 mb-3" style={{boxShadow:'none', height: '32rem', border: 'none'}}>
          <CardTitle className="mt-3 text-center" style={{textShadow:'none'}}>{`${
            register ? "Register" : "Log In"
          }`}</CardTitle>
          <CardBody>
{/*             
            <Row className="justify-content-around">
              <Col>
                <Button
                  // className="col"
                  color="primary"
                  size="lg"
                  style={socialBtns}
                  onClick={() => handleSignInClick("twitter")}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
              </Col>
              <Col>
                <Button
                  // className="col"
                  color="primary"
                  size="lg"
                  style={socialBtns}
                  onClick={handleSignInClick}
                >
                  <FontAwesomeIcon icon={faGooglePlus} />
                </Button>
              </Col>
              <Col>
                <Button
                  // className="col"
                  color="primary"
                  size="lg"
                  style={socialBtns}
                  onClick={handleSignInClick}
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Button>
              </Col>
            </Row>
            <p className=" separator text-center">
              <span>OR</span>
            </p> */}
            <Row>
              {register ? (
                <RegisterForm setModal={props.setModal} checkAuth={props.checkAuth} toggle={props.toggle} />
              ) : (
                <LoginForm setModal={props.setModal} checkAuth={props.checkAuth} toggle={props.toggle} />
              )}
            </Row>
          </CardBody>

          <CardFooter>
            <Row>
              <Col>
                {!register ? (
                  <p style={{ textAlign: "left" }}>
                    Don't have an account?{" "}
                    <span
                      className="registerLink"
                      role="button"
                      onClick={e => {
                        props.toggleRegister(true);
                      }}
                    >
                      Register
                    </span>
                  </p>
                ) : (
                  <p style={{ textAlign: "left" }}>
                    Have an account?{" "}
                    <span
                      className="registerLink"
                      role="button"
                      onClick={e => {
                        props.toggleRegister(false);
                      }}
                    >
                      Log In
                    </span>
                  </p>
                )}
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default LogIn;
