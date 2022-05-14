import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Navbar.css'
import TraerCategorias from '../Categoria/TraerCategorias'

const Navegacion = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <NavDropdown title='Productos' >
                        <TraerCategorias />
                    </NavDropdown>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navegacion
