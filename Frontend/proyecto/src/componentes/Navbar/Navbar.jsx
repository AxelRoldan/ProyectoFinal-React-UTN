import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navegacion = () => {

    const [categorias, setCategorias] = useState(null)

    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLA/categories')
            .then(categorias => categorias.json())
            .then(categorias => setCategorias(categorias))
    }, [categorias])

    if (!categorias) return 'hola'

    return (

        <Navbar bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <NavDropdown title='Productos'>
                        {categorias.map(categoria => {
                            return (
                                <>
                                    <NavDropdown.Item as={Link} to={`/Categoria/${categoria.id}`}>{categoria.name}</NavDropdown.Item>
                                </>
                            )
                        })}
                    </NavDropdown>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navegacion
