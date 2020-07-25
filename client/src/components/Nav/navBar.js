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

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Take-A-Hike</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
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
                                                onClick={() => props.toggle("loginForm", true)}
                                            >
                                                Register
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                name="loginForm"
                                                onClick={() => props.toggle("loginForm", true)}
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
        </div>
    );
}

export default NavBar;