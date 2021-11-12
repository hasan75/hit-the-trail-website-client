import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logoHTT.png'
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
                        <div> 
                <div className="d-lg-flex justify-content-evenly user-header">
                    <div className="col-12 col-md-12 col-lg-8 d-lg-flex custom-link">
                        <Navbar bg="light" expand="lg" className="navbar-brand">
                            <Container fluid>
                                <Navbar.Brand as={NavLink} to="/home">
                                  <img width="70px" src={logo} alt="Logo" />{" "}
                                  <span className="title"> HTT</span>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Link to="/home"><Nav.Link href="home">Home</Nav.Link></Link>
                                        <Link to="/events"><Nav.Link href="events">Events</Nav.Link></Link>
                                        <Link to="/myschedule"><Nav.Link href="schedule">My Schedule</Nav.Link></Link>
                                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                            <Link to="/createevent"><NavDropdown.Item href="createevent">Create Event</NavDropdown.Item></Link>
                                            <Link to="/eventlist"><NavDropdown.Item href="eventlist">All Event</NavDropdown.Item></Link>
                                            <Link to="/schedulelist"><NavDropdown.Item href="schedulelist">All Schedule</NavDropdown.Item></Link>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;