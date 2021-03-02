import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/About.css';

function About() {
    return (
        <div>
            <Container fluid className="justify-content-center">
                <Row className="row1 justify-content-center">
                    <h1>"I Have No Name"</h1>
                </Row>
                    
                <Row className="row2">
                    <Col></Col>
                    <Col className="align-content-center">
                        <h2>I'm row 2</h2> 
                    </Col>
                    <Col></Col>
                </Row>

                
                {/* <div className="entries">
                    <div className="entry">
                        <h2>Who</h2>

                        justify content center
                        <p>
                            Hello, I'm Alex An. I'm a developer in Dallas Texas and FMA is one of my favorite TV shows!
                        </p>
                    </div>
                    
                    <div className = "entry">
                        <h2>What</h2>
                        <p>
                            The FMA API is a collection of quotes from the anime series Fullmetal Alchemist: Brotherhood. This site is designed to provide an API, as well as demonstrate a method of using it. 
                        </p>
                    </div>
                    
                    <div className="entry">
                        <h2>Issues</h2> 
                        <p>
                            If you come across any errors, please contribute by creating an issue or a pull request on Github!
                        </p>
                    </div>
                </div> */}
            </Container>
        </div>
    );
}

export default About;
