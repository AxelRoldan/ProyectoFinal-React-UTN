import React from 'react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './Categoria.css'

export default function Productos() {

  const { id: subCategoria } = useParams()
  const [productosSubCategoria, setProductosSubCategoria] = useState(null)

  useEffect(() => {

    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${subCategoria}`)
      .then(productos => productos.json())
      .then(productos => setProductosSubCategoria(productos))

  }, [setProductosSubCategoria, subCategoria])

  if (!productosSubCategoria) return 0

  console.log(productosSubCategoria)

  return (
    <>
      <Navegacion />
      <Container id="containerMostrarProducto">
        <Row className="g-4 pt-5 justify-content-center">
          {productosSubCategoria.results.map(producto => {
            return (
              <>
                <Card as={Link} to={`/Producto/${producto.id}`} className="flex-sm-row" id="cajaProducto">
                  <Col className="d-flex justify-content-center align-items-center fotoProducto" sm={{ span: 2, offset: 0 }}>
                    <Card.Img src={producto.thumbnail} id="imagenProducto"></Card.Img>
                  </Col>
                  <Col sm={{ span: 10, offset: 0 }} id="columnaTarjeta"className="d-flex align-items-sm-center justify-content-center px-4">
                    <Card.Title style={{color: "#8A8282"}}> {producto.title} </Card.Title>
                  <p className="precioProductoMoneda">{producto.currency_id}</p>
                  <p className="llegaGratisMañana">Llega gratis gañana</p>
                  <p className="precioProducto">$ {producto.price}</p>
                  </Col>
                </Card>
              </>
            )
          })}
        </Row>
      </Container>
      <Footer />
    </>
  )
}
