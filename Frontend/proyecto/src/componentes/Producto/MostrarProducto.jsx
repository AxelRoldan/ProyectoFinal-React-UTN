import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navegacion from '../Navbar/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import './Buscador.css'
import TempleteCarga from '../TempleteCarga'

function MostrarProducto() {

    const { id: consulta } = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidadProducto, setCantidadProducto] = useState(1)
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()
    let contador = 0;
    let estadoProducto = "NUEVO"

    const manejarEvento = () => {

        if (!isAuthenticated) {
            loginWithRedirect()
        }

        let compraPersona = {

            nombre: user.email,
            producto: {
            precioProducto: producto.price,
            imagenProducto: producto.pictures[0].url,
            cantidadProducto: cantidadProducto,
            tituloProducto: producto.title}
        }

        fetch("http://localhost:8080/api/datosPersona", {
            method: "POST",
            body: JSON.stringify(compraPersona)
        })
            .then(persona => persona.json())
            .then(persona => console.log(persona))
    }

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${consulta}`)
            .then(producto => producto.json())
            .then(producto => setProducto(producto))
    }, [setProducto, consulta])

    if (!producto) return <TempleteCarga />

    producto.condition !== "new" ? estadoProducto = "Usado" : estadoProducto = "Nuevo"

    return (
        <>
            <Navegacion />
            <Container className="d-flex justify-content-center flex-column align-items-center" id="containerMostrarProducto">
                <Row className="justify-content-center producto">
                    <Col md={1} className="d-flex align-items-center justify-content-flex-start flex-column" id="columnaFotos">
                        {
                            producto.pictures.map(imagen => {
                                return (
                                    <>
                                        <Col id="cajaImagenProducto" className="d-flex justify-content-center align-items-center">
                                            <Image
                                                fluid
                                                rounded
                                                src={imagen.url}
                                                id="imagenProductoColumna"
                                                onMouseEnter={e => setTimeout(() => document.getElementById("imagenProductoPrincipal").src = e.target.src, 200)}
                                            >
                                            </Image>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Col>
                    <Col id="carousel" md={1}>
                        <Carousel>
                            {
                                producto.pictures.map(imagen => {
                                    return (
                                        <Carousel.Item>
                                            <Col id="carouselCuerpo" className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                                <Image
                                                    id="carouselFotos"
                                                    fluid
                                                    rounded
                                                    src={imagen.url}
                                                >
                                                </Image>
                                            </Col>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center" id="imagenColumnaPrincipal">
                        <Image src={producto.pictures[0].url} fluid id="imagenProductoPrincipal"></Image>
                    </Col>
                    <Col md={4}>
                        <Row className="flex-column" id="columnaDescripcion">
                            <Col className="descripcionVendidos">
                                {estadoProducto} | {producto.sold_quantity} vendidos
                            </Col>
                            <Col className="tituloProducto">
                                {producto.title}
                            </Col>
                            <Col className="precio">
                                $ {producto.price}
                            </Col>
                            <Col id="cantidad" >
                                CANTIDAD
                            </Col>
                            <Col className="d-flex justify-content-between align-items-center" id="columnaBoton">
                                <Button id="botonMas" onClick={() => setCantidadProducto(prevState => prevState > 1 ? prevState - 1 : prevState)}><Image src={"https://i.ibb.co/nCrhCrw/signo-Menos.png"} id="signoMas"></Image></Button>
                                <div className="numeroCantidad"> {cantidadProducto}</div>
                                <Button id="botonMenos" onClick={() => setCantidadProducto(prevState => prevState < producto.available_quantity ? prevState + 1 : prevState)}><Image src={"https://i.ibb.co/vZFvbWP/signoMas.png"} id="signoMas"></Image></Button>
                            </Col >
                            <Col className="stockDisponible">
                                Stock disponible {producto.available_quantity}
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button as={Link} to={"/MiCarrito"} id="agregarAlCarrito" onClick={() => manejarEvento()}>Agregar al carrito</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="producto align-content-center" style={{ width: "80%" }}>
                    <h2 style={{ textAlign: "center" }}>CARACTERISTICAS</h2>
                    {
                        producto.attributes.map(atributos => {
                            contador++
                            if (contador <= 10) {
                                if (atributos.name && atributos.value_name) {
                                    return (
                                        <>
                                            <Col sm={{ span: 3, offset: 1 }} className="nombreCaracteristicas">
                                                {atributos.name}
                                            </Col>
                                            <Col sm={{ span: 7 }} className="valorCaracteristicas">
                                                {atributos.value_name}
                                            </Col>
                                        </>
                                    )
                                }
                            }
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default MostrarProducto