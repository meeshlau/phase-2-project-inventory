import React from "react"
import InventoryCard from "./InventoryCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function InventoryList({ inventory, cart, setCart }) {


    return (
        <Container>
            <Row className="g-4">
                    <Col sm="1" md="2" xl="4">
                    <h2>Available Inventory:</h2>
                        {inventory.map((inv) => {
                            return <InventoryCard key={inv.id} id={inv.id} brand={inv.brand} model={inv.model} image={inv.image} inventory={inventory}/>
                        })}
                    </Col>
            </Row>
        </Container>
    )
}

export default InventoryList;