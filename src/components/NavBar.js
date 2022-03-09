import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">React-Testing</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Nav.Link href="/page2">Page 2</Nav.Link>
                    <Nav.Link href="/page3">Page 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar