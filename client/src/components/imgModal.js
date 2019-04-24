import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="col-md-3">
                <img alt={this.props.images.alt} onClick={this.toggle} className="infoImg d-flex justify-content-between mb-3" src={this.props.images.url} />
                <Modal className="col-md-12" isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.images.caption}</ModalHeader>
                    <img alt={this.props.images.alt} onClick={this.toggle} className="imgModal" src={this.props.images.url} />
                </Modal>
            </div>
        );
    }
}

export default ModalExample;