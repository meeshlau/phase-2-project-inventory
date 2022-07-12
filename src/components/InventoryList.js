import React from "react"
import InventoryCard from "./InventoryCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InventoryList({ inventory }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Available Inventory:</h2>
                    {inventory.map((inv) => {
                        return <InventoryCard key={inv.id} brand={inv.brand} model={inv.model} image={inv.image}/>
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default InventoryList;