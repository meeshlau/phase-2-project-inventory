import React from "react"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Search({ setSearch }) {
    return (
        <Container>
            <Form>
            <Form.Group className="mb-3" controlId="search">
                <Form.Label>Search:</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Type a model to search..." 
                onChange={(e) => setSearch(e.target.value)}
                />
            </Form.Group>
            </Form>
        </Container>
    );
}

export default Search;