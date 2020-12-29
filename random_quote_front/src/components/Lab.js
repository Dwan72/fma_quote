import '../styles/Lab.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
const axios = require('axios');




function handleInputChange(event) {
    const target = event.target;
    const value = target
}



const ApiInput = () => {

    
    const [inputAddress, setInputAddress] = useState("");

    function handleChange(event) {
        setInputAddress(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputAddress)
        
    }
    
    
    return(
        <Form className="formContainer" onSubmit={handleSubmit}>

            <Container className="justify-content-center">
                
                <Row>
                    <Form.Label>Type an ID from 0-216 for a quote!</Form.Label>
                </Row>
                <Row>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">http://localhost:5000/id/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                        className="shadow-none"
                        placeholder="Enter text here" 
                        onChange={handleChange}
                        /> 
                    </InputGroup>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Button
                    type="submit" 
                    variant="outline-light"
                    onClick = {handleSubmit}
                    
                    >Make a request
                    </Button>
                </Row>

            </Container>


            
        </Form>
    )
}



function Lab() {


    return (
        <div>
            <Container fluid className = "labContainer">
                <Row className="lab-header justify-content-center">
                    <h1>Testing Lab</h1>
                </Row>

                <Row className="form-style justify-content-center">
                    <Col xs lg = "4">
                        <ApiInput/>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
  
  export default Lab;
  