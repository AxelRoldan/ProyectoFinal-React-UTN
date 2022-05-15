import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './Navbar.css'
import TraerCategorias from '../Categoria/TraerCategorias'
import BuscarProducto from '../Producto/BuscarProducto'
import { Button } from 'react-bootstrap'

const Navegacion = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container className="">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <TraerCategorias />
                        </NavDropdown>
                    </Nav>
                    <BuscarProducto />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegacion
