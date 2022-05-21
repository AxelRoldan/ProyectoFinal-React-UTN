import React from 'react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MiCarrito.css'

function CompraExitosa() { //Renderizo en caso de que la compra haya sido exitosa
  return (
    <>
        <Navegacion />
        <Container id="containerMostrarProducto" style={{height:"700px"}}>
            <Row style={{height:"100%", maxHeight:"700px"}}>
                <Col className="d-flex justify-content-center align-items-center" style={{fontSize:"30px", textAlign:"center"}} xs={12}> Su compra se proceso con exito, en 10 dias habiles su producto llegara </Col>
                <Col className="d-flex justify-content-center align-items-center"  xs={12}>
                    <Button id="agregarAlCarrito" as={Link} to={"/"} >SEGUIR COMPRADO</Button>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  )
}

export default CompraExitosa