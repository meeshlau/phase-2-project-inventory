import React from "react"
import InventoryCard from "./InventoryCard"
import Search from "./Search"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InventoryList({ inventory, setSearch }) {
    return (
        <Container>
            <Search setSearch={setSearch}/>
            <Row className="g-4">
                    <Col>
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