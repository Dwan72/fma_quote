
import { orange } from '@material-ui/core/colors';
import Nav from 'react-bootstrap/Nav';
import '../styles/Documentation.css';
import SideBar from './SideBar.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sideBarWidth = 240;



function Documentation() {


    return (

        <Container fluid className="p-0">
            <Row>
                <Col xs={3} className="p-0">
                    <SideBar />
                </Col>

                <Col xs={7} >
                    <h1>
                        Documentation
                    </h1>
                </Col>
            </Row>

        </Container>

    );
}

export default Documentation;
