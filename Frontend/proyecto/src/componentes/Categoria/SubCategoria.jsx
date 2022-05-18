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

  return (
    <>
      <Navegacion />
      <Container style={{ maxWidth: "1050px", padding: "30px" }}>
        <Row className="g-4 mt-5">
          {productosSubCategoria.results.map(producto => {
            return (
              <>
                <Card as={Link} to={`/Producto/${producto.id}`} className="flex-sm-row" id="cajaProducto">
                  <Col className="d-flex justify-content-center fotoProducto" sm={{ span: 2, offset: 0 }}>
                    <Card.Img src={producto.thumbnail} style={{ width: "100%", maxWidth: "120px", minWidth: "100px", height: "150px" }}></Card.Img>
                  </Col>
                  <Col sm={{ span: 10, offset: 0 }} className="d-flex align-items-center justify-content-center">
                    <Card.Title> {producto.title} </Card.Title>
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
