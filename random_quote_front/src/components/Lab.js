import '../styles/Lab.css'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ApiInput = () => {
    
    return(
        <div className = "formContainer">
            <Form className = "formStyle">
                <Form.Label>Request for your favorite character!</Form.Label>
                <Form.Control type="email" placeholder="Enter text here" />                    
            </Form>
        </div>
    )
}


function Lab() {
    return (
        <div>
            <Container className = "labContainer ">
                <Row>
                    <h1 className = "title">Testing Lab</h1>
                </Row>
                <Row>
                    <ApiInput></ApiInput>
                </Row>

            </Container>
        </div>

    );
}
  
  export default Lab;
  