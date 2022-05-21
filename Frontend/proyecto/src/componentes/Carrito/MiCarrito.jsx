import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MiCarrito.css'

function MiCarrito() {

    const { user, isAuthenticated, loginWithRedirect } = useAuth0()
    const [listaCompras, setListasCompras] = useState(null)

    if (!isAuthenticated) { //pregunto si el usuario esta logeado, en caso de que no, lo redirijo
        loginWithRedirect()
    }

    useEffect(() => {   //peticion GET que trae las compras realizada por la persona, filtra por email
        fetch(`http://localhost:8080/api/datosPersona/${user.email}`)
            .then(compras => compras.json())
            .then(compras => setListasCompras(compras))
    }, [setListasCompras])

    const eliminarCompra = () => {  //Elimina las compras con metodo delete

        fetch(`http://localhost:8080/api/datosPersona/${user.email}`,{
            method: "delete"
        })
        .then(compras => compras.json())
        .then(compras => setListasCompras(compras))
    }

    if (!listaCompras) return 0

    let total = 0

    let traerTotales = listaCompras.valor.map(producto => { //Extraigo los totales de los productos
        return (producto.objetoMeli.precioProducto * producto.objetoMeli.cantidadProducto)
    })

    for(let i=0 ; i< traerTotales.length; i++){ //los añado a la variable total y lo renderizo
        total += traerTotales[i]
    }

    return (
        <>
            <Navegacion />
            <Container id="containerMostrarProducto" style={{height:"700px"}}>
                <Row className="flex-column align-items-center justify-content-center mt-3">
                    {listaCompras.valor.map(producto => {
                        return (
                            <>
                                <Card className="flex-sm-row mb-4" id="cajaProducto">
                                    <Col className="d-flex  align-items-center justify-content-center py-4 fotoProducto" sm={{ span: 2, offset: 0 }}>
                                        <Card.Img src={producto.objetoMeli.imagenProducto} id="imagenProductoCarrito"></Card.Img>
                                    </Col>
                                    <Col sm={{ span: 10, offset: 0 }} id="columnaTarjeta" className="d-flex align-items-center justify-content-center px-4">
                                        <Card.Title style={{ color: "#8A8282" }}> {producto.objetoMeli.tituloProducto} </Card.Title>
                                        <p className="precioProductoMoneda">TOTAL</p>
                                        <p className="llegaGratisMañana">CANTIDAD {producto.objetoMeli.cantidadProducto}</p>
                                        <p className="precioProducto">$ {producto.objetoMeli.precioProducto * producto.objetoMeli.cantidadProducto}</p>
                                    </Col>
                                </Card>
                            </>
                        )
                    })}
                </Row>
                <Row className="justify-content-center">
                    <Col id="precioTotal">
                        <p>TOTAL A PAGAR POR TODO</p>
                        <p id="totalNumero">${total}</p>
                        <Button id="agregarAlCarrito" as={Link} to={"/CompraExitosa"} onClick={ () => eliminarCompra()}>Pagar</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default MiCarrito