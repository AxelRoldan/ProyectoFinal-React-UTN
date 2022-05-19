import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Navegacion from '../Navbar/Navbar'
import './Buscador.css'

function MostrarProducto() {

    const { id: consulta } = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidadProducto, setCantidadProducto] = useState(1)
    let contador = 0;

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${consulta}`)
            .then(producto => producto.json())
            .then(producto => setProducto(producto))
    }, [setProducto, consulta])

    if (!producto) return 0

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
                                        <Col id="cajaImagenProducto" className="d-flex justify-content-center">
                                            <Image
                                                fluid
                                                rounded
                                                src={imagen.url}
                                                id="imagenProducto"
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
                    <Col md={4} className="d-flex justify-content-center" id="columnaDescripcion">
                        <Row className="flex-column justify-content-center">
                            <Col >
                                {producto.condition} | {producto.sold_quantity} vendidos
                            </Col>
                            <Col >
                                {producto.title}
                            </Col>
                            <Col >
                                $ {producto.price}
                            </Col>
                            <Col >
                                Agregar cantidad
                            </Col>
                            <Col className="d-flex justify-content-between">
                                <Button onClick={() => setCantidadProducto(prevState => prevState > 1 ? prevState - 1 : prevState)}> - </Button>
                                <div> {cantidadProducto}</div>
                                <Button onClick={() => setCantidadProducto(prevState => prevState < producto.available_quantity ? prevState + 1 : prevState)}> + </Button>
                            </Col >
                            <Col>
                                Stock disponible {producto.available_quantity}
                            </Col>
                            <Col>
                                <Button>Agregar al carrito</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="producto align-content-center" style={{ width: "80%" }}>
                    <h2 style={{textAlign:"center"}}>CARACTERISTICAS</h2>
                    {
                        producto.attributes.map(atributos => {
                            contador++
                            if (contador <= 10) {
                                if (atributos.name && atributos.value_name) {
                                    return (
                                        <>
                                            <Col sm={{span:3, offset:1}} className="nombreCaracteristicas">
                                                {atributos.name}
                                            </Col>
                                            <Col sm={{span:7}} className="valorCaracteristicas">
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
        </>
    )
}

export default MostrarProducto