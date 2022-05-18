import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Navegacion from '../Navbar/Navbar'
import './Buscador.css'

function MostrarProducto() {

    const { id: consulta } = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidadProducto, setCantidadProducto] = useState(1)

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${consulta}`)
            .then(producto => producto.json())
            .then(producto => setProducto(producto))
    }, [setProducto, consulta])

    if (!producto) return 0

    return (
        <>
            <Navegacion />
            <Container className="d-flex justify-content-center" style={{ maxWidth: "1100px", height: "100%" }}>
                <Row id="producto" className="aling-items-center">
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
                    <Col md={7} className="d-flex align-items-center justify-content-center">
                        <Image src={producto.pictures[0].url} id="imagenProductoPrincipal"></Image>
                    </Col>
                    <Col md={4}>
                        <Row className="flex-column" id="columnaDescripcion">
                            <Col className="d-flex justify-content-center">
                                {producto.condition} | {producto.sold_quantity} vendidos
                            </Col>
                            <Col className="d-flex justify-content-center">
                                $ {producto.price}
                            </Col>
                            <Col className="d-flex justify-content-center">
                                Agregar cantidad
                            </Col>
                            <Col className="d-flex justify-content-between">
                                <Button onClick={() => setCantidadProducto(prevState => prevState > 1 ? prevState - 1 : prevState)}> - </Button>
                                <div> {cantidadProducto}</div>
                                <Button onClick={() => setCantidadProducto(prevState => prevState < producto.available_quantity ? prevState + 1 : prevState)}> + </Button>
                            </Col >
                            <Col className="d-flex justify-content-center">
                                Stock disponible {producto.available_quantity}
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button>Agregar al carrito</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MostrarProducto