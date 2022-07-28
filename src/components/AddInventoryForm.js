import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function AddInventoryForm({ setInventory, inventory }) {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        image: "",
    })

    function handleAddInv(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "brand": formData.brand,
                "model": formData.model,
                "image": formData.image,
            })
        })
        .then((r) => r.json())
        .then((addedInv) => setInventory([...inventory, addedInv]))
        e.target.reset()
    }

    return(
        <Container>
            <h3>Add new inventory</h3>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                    <Form.Control 
                    type="text" 
                    name="brand" 
                    placeholder="Brand" 
                    onChange={handleAddInv} 
                    />
                    </Col>
                    <Col>
                    <Form.Control 
                    type="text" 
                    name="model" 
                    placeholder="Model" 
                    onChange={handleAddInv} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control 
                    type="text" 
                    name="image" 
                    placeholder="Image url" 
                    onChange={handleAddInv} 
                    />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddInventoryForm