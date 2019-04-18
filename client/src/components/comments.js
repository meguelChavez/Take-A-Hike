import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Comments extends React.Component {
    componentDidMount() {
        this.props.getComments();
    }
    render() {
        return (
            <React.Fragment>
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
                <div className="col-md-8">
                    {(this.props.allComments.length > 0) ? this.props.allComments.map((element, i) => (
                        <React.Fragment key={element._id}>
                            <h5>{element.userName}</h5>
                            <p>{element.comments}</p>
                            <h5>{element.createdAt}</h5>
                        </React.Fragment>
                    )) : ""
                    }
                </div>
            </React.Fragment >
        );
    }
}