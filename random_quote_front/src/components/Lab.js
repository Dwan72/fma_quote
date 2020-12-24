import '../styles/Lab.css'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ApiInput = () => {
    
    return(
        <div className = "formContainer">
            <Form>
                <Form.Label>Request for your favorite character!</Form.Label>
                <Form.Control placeholder="Enter text here" />                    
            </Form>
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
                        <ApiInput></ApiInput>
                    </Col>
                </Row>
                <Row className="button-style justify-content-center">
                    <Button variant="outline-light">Search URL</Button>
                </Row>


            </Container>
        </div>

    );
}
  
  export default Lab;
  