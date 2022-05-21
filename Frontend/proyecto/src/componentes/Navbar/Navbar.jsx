import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import TraerCategorias from '../Categoria/TraerCategorias'
import BuscarProducto from '../Producto/BuscarProducto'
import Login from '../Login/Login'
import Logout from '../Login/Logout'
import Profile from '../Login/Profile'
import { useAuth0 } from '@auth0/auth0-react'

const Navegacion = () => {

    const { isAuthenticated } = useAuth0() //extraemos variable boolean para saber si el usuario esta logeado o no

    return (
        <Navbar expand="lg" id="navbar" >
            <Container className="" >
                <Navbar.Brand as={Link} to={"/"}><Image src={"https://i.ibb.co/6ZbL9t9/Fake.png"} rounded id="imagenLogo"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/MiCarrito"}>Mi Carrito</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <TraerCategorias />
                        </NavDropdown>
                        {  isAuthenticated?(    //IF que habilita botones en caso de que el usuario este logeado o no
                          <>
                            <Logout />
                          </>
                        )
                        :
                        (
                            <Login />
                        )
                            
                            }
                    </Nav>
                    <BuscarProducto />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegacion
