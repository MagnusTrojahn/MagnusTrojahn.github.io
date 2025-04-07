import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import welcomeImage from '../assets/1743886710551.png';
import githubImage from '../assets/githubimg.png';
import linkedinImage from '../assets/linkedinimg.png';

export function Header() {
  return (
    <Navbar style={{ backgroundColor: '#F5F5DC' }} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto">Magnus Trojahn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="mx-3">Projects</Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-3">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;