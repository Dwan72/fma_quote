import '../styles/App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter} from "react-router";
import  React, {Fragment} from "react";
import About from './About';
import Documentation from './Documentation';
import Lab from './Lab';
import Home from './Home';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = props => {
  const { location } = props; 
  return(
      <Navbar className = "navStyles" variant = "dark">
          <Nav activeKey={location.pathname}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/documentation">Documentation</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/lab">Lab</Nav.Link>
          </Nav>
      </Navbar>
  );
};

const HeaderWithRouter = withRouter(Header);




function App() {

  return (
        <div className = "backdrop p-0 bg-dark text-white ">
          <HeaderWithRouter/>
          <div className = "pageAnchors justify-content-center">
            <Route path="/" exact component={Home} />
            <Route path="/documentation" exact component={Documentation} />
            <Route path="/about" exact component={About} />
            <Route path="/lab" exact component={Lab} />
          </div>
        </div>




  );
}

export default App;
