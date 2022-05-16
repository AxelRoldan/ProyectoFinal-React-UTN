import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navbar.css'
import TraerCategorias from '../Categoria/TraerCategorias'
import BuscarProducto from '../Producto/BuscarProducto'

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
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="deslizar">
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
