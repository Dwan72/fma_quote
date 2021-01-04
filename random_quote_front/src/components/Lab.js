import '../styles/Lab.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const axios = require('axios');





const ApiInput = () => {

    
    const [inputAddress, setInputAddress] = useState("");
    const [jsonRequest, setJsonRequest] = useState("");

    function handleChange(event) {
        setInputAddress(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        let getUrl = "http://localhost:5000/quotes/".concat(inputAddress)
        axios.get(getUrl)
        .then((res) => {
            let jsonHolder = JSON.stringify(res.data, null, 2);

            setJsonRequest(jsonHolder)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <Container fluid className="justify-content-center">
                
                
                <Row>
                    <Col></Col>
                    <Col>
                        <Row>
                            <Form.Label >Type an ID from 0-216 for a quote!</Form.Label>
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
                    </Col>
                    <Col></Col>
                </Row>



                <Row>
                    <Col></Col>
                    <Col xs={7}>
                        <Row>
                            <Form.Label>Results:</Form.Label>
                        </Row>
                        <Row className = "mt-4">
                            <Form.Control as="textarea" rows={10} placeholder={jsonRequest} readOnly/>
                        </Row>
                    </Col>
                    <Col></Col>
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
                    <h1>Lab</h1>
                </Row>

                <Row className="form-style justify-content-center">
                    <Col>
                        <ApiInput/>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
  
  export default Lab;
  