import '../styles/Lab.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ApiInput = () => {
    
    return(
        <div className = "formContainer">
            <Form.Label>Type an ID from 0-216 for a quote!</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">http://localhost:5000/id/</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className="shadow-none"placeholder="Enter text here" /> 
            </InputGroup>
        </div>
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
                <Row className="button-style justify-content-center">
                    <Button variant="outline-light">Make a request</Button>
                </Row>


            </Container>
        </div>

    );
}
  
  export default Lab;
  