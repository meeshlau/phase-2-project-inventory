import React, { useEffect, useState } from "react"
import InventoryList from "./InventoryList"
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
        <Navbar.Brand href="#home">Equipment Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <NavDropdown title="Equipment by Brand" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TrippLite</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <AddInventoryForm />
      <InventoryList inventory={inventory} />
        
    </Container>
  );
}

export default App;
