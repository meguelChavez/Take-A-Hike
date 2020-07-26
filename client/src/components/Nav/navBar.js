import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import GenModal from '../Modal/genMondal';
import LogIn from '../LogIn/LogIn';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false)
    const [register, setRegister] = useState(false)

    const toggleRegister = () => setRegister(!register)

    return (
        <div>
            <Navbar dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Take-A-Hike</NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {props.isAuthed ? (
                                <NavItem>
                                    <NavLink href="#" onClick={props.handleLogoutClick}>
                                        Log Out
                                    </NavLink>
                                </NavItem>
                            ) : (
                                    <React.Fragment>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                name="loginForm"
                                                onClick={() => {
                                                    setRegister(true)
                                                    setModal(true)
                                                }}
                                            >
                                                Register
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                name="loginForm"
                                                onClick={() => {
                                                    setRegister(false)
                                                    setModal(true)
                                                }}
                                            >
                                                Log In
                                            </NavLink>
                                        </NavItem>
                                    </React.Fragment>
                                )}


                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <GenModal modal={modal} register={register} setRegister={setRegister} setModal={setModal}>
                <LogIn register={register} toggleRegister={toggleRegister} footer={false} />
            </GenModal>
        </div>
    );
}

export default NavBar;