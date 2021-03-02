import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from 'react-bootstrap/Navbar';

import '../styles/Sidebar.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sideBarWidth = 240;


const SideBar = () => {

    return (
        <div>
            <Nav className="sidebar flex-column bg-light pl-3">
                <Nav.Item as="h3">
                    <Nav.Link>Introduction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Base URL</Nav.Link>
                </Nav.Item>

                <Nav.Item as="h3">
                    <Nav.Link>Quote</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Quote attributes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Get quote by id</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Get random quote</Nav.Link>
                </Nav.Item>

            </Nav>

        </div>
        
    )
}

export default SideBar;