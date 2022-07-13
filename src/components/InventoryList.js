import React, { useState } from "react"
import InventoryCard from "./InventoryCard"
import Cart from "./Cart"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InventoryList({ inventory, cart, setCart }) {

    function inCart() {
        cart.map((item) => {
            setCart(item)
        })
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Available Inventory:</h2>
                    {inventory.map((inv) => {
                        return <InventoryCard key={inv.id} brand={inv.brand} model={inv.model} image={inv.image} inventory={inventory}/>
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default InventoryList;