import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from "./Cart"

function InventoryCard({ id, brand, model, image, inventory }) {
    const [stock, setStock] = useState(true)
    const [cart, setCart] = useState([])

    function inStock() {
        setStock(!stock)
    }
    function onClickAdd(e) {
        inStock()
        if (stock === true) {
            return inventory.filter(() => {
                setCart(e.target)
            })
        }
    }

    function onClickRemove(e) {
        inStock()
        console.log(e.target)
        }
    

    return (
        <div>
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{brand} {model}</Card.Title>
                {stock ? (
                <Button variant="primary" onClick={onClickAdd}>Add to Cart</Button>
                ) : (
                <Button onClick={onClickRemove}>Remove from Cart</Button>
                )}
            </Card.Body>
        </Card>
        <Cart cart={cart}/>
        </div>
  );
}

export default InventoryCard