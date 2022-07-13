import React, { useEffect, useState } from "react"
import InventoryList from "./InventoryList"
import Cart from "./Cart"
import AddInventoryForm from"./AddInventoryForm"
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [inventory, setInventory] = useState([])
  
  
  useEffect(() => {
    fetch("http://localhost:3000/equipment")
    .then((r) => r.json())
    .then((inv) => setInventory(inv))
  }, [])

  return (
    <Container>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Y. Hata Equipment Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#add-new">Add New</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <InventoryList inventory={inventory}/>
    </Container>
  );
}

export default App;
