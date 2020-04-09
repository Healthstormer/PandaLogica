import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Button} from 'react-bootstrap';
import {
    NavLink
  } from "react-router-dom";
import './layoutist.css';
const routes = require('../layoutist/routes.json');

function NavBar (props) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          Pandalogica
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link activeClassName="activeNav" href="/start">Start</Nav.Link>
            { 
            /*
            routes.map((route, index) => {
              return <Nav.Link key={index} as={NavLink} exact activeClassName="activeNav" to={route.route}>{route.title}</Nav.Link>
            })
          */} 
          </Nav>
        </Navbar.Collapse>
        <Button variant="secondary" title="Login" className="float-right align-right" href="/login">Login</Button>
      </Navbar>
    )
  }

export default NavBar;