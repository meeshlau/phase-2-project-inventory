import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Container>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand to="/home">Y. Hata</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/inventory">Inventory </NavLink> 
                        <NavLink to="/addinventory">Add Inventory</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar