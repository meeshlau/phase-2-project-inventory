import React from "react"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/home">Y. Hata</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/inventory">Inventory </NavLink> 
                        {/* <NavLink to="/search">Search</NavLink> */}
                        <NavLink to="/addinventoryform">Add Inventory</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    
    )
}

export default NavBar