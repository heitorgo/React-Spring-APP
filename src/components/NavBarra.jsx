import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

class NavBarra extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#">GF</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/usuario">Usuario</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default NavBarra;