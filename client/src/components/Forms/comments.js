import React from 'react';
import Moment from 'moment';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Comments extends React.Component {
    componentDidMount() {
        this.props.getComments();
    }
    render() {
        return (
            <React.Fragment>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={this.props.postComment}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .min(14)
                            .required("Password is required")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <Form className="col-md-4">
                                <FormGroup>
                                    <Label for="userName">User Name</Label>
                                    <Input onChange={this.props.onChange} value={this.props.userName} type="text" name="userName" id="userName" placeholder="user name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="comments">Comments</Label>
                                    <Input onChange={this.props.onChange} value={this.props.comments} type="textarea" name="comments" id="comments" />
                                </FormGroup>
                                <Button onClick={this.props.postComment}>Submit</Button>
                            </Form>
                        )
                    }}
                </Formik>
                <div className="col-md-8 commentsBox">
                    {(this.props.allComments.length > 0) ? this.props.allComments.map((element, i) => (
                        <React.Fragment key={element._id}>
                            <h5>{element.userName}</h5>
                            <p>{element.comments}</p>
                            <h5>{Moment(element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                        </React.Fragment>
                    )) : ""
                    }
                </div>
            </React.Fragment >
        );
    }
}