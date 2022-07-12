import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InventoryCard({ id, brand, model, image }) {
    const [stock, setStock] = useState(true)

    function inStock() {
        setStock(!stock)
    }
    function onClick() {
        inStock()
    }

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{brand} {model}</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                {stock ? (
                <Button variant="primary" onClick={onClick}>Add to Cart</Button>
                ) : (
                <Button>added!</Button>
                )}
            </Card.Body>
        </Card>
  );
}

export default InventoryCard