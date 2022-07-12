import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function AddInventoryForm() {
    function onSubmit() {
        
    }
    return(
        <Container>
            <h3>Add new inventory</h3>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                    <Form.Control placeholder="Brand" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Model" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control placeholder="Image url" />
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