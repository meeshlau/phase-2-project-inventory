import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InventoryCard({ id, brand, model, image }) {
    const [stock, setStock] = useState(true)

    function onClick(e) {
       setStock(!stock)
       console.log(stock)
    }

    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}  >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{brand} {model}</Card.Title>
                    <Card.Text>{brand}</Card.Text>
                    {stock ? (
                    <Button variant="outline-danger" id={id} onClick={onClick}>♡</Button>
                    ) : (
                    <Button variant="danger" id={id} onClick={onClick}>♥</Button>
                    )}
                </Card.Body>
            </Card>
        </div>
  );
}

export default InventoryCard