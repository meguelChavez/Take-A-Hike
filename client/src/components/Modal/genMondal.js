import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const GenModal = (props) => {
    const {
        buttonLabel,
        ModalClass,
        modal,
        register
    } = props;


    const toggleModal = () => props.setModal(!modal);
    const toggleRegister = () => props.setRegister(!register)

    return (
        <div>

            <Modal isOpen={modal} toggle={toggleModal} className={ModalClass}>
                <ModalHeader toggle={toggleModal}>{props.title}</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );

}

export default GenModal