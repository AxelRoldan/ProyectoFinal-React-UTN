import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import TraerCategorias from '../Categoria/TraerCategorias'
import BuscarProducto from '../Producto/BuscarProducto'

const Navegacion = () => {

    return (
        <Navbar expand="lg" id="navbar" >
            <Container className="" >
                <Navbar.Brand as={Link} to={"/"}><Image src={"https://i.ibb.co/6ZbL9t9/Fake.png"} rounded id="imagenLogo"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/"}>Mi Carrito</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
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
