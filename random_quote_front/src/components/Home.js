import '../styles/Home.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { characters } from '../characters.js';

function Home() {
    var characterList = characters.map(
        function(character){
            return (
                <Col className="container-fluid mt-4">
                    <Card style={{ width: '20rem' }}> 
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title className="">{character.name}</Card.Title>
                            <Card.Text>
                                {character.id}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card> 
                </Col>
            )
        }
    )
    
    return (
        <Container>
            <CardDeck>
                {characterList}
            </CardDeck>
        </Container>
    );
}

export default Home;
