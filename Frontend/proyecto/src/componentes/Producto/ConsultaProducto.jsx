import React from 'react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'

export default function Producto() {

  const { id: consulta } = useParams()
  const [resultadoConsulta, setResultadoConsulta] = useState(null)

  useEffect(() => {

    fetch(`https://api.mercadolibre.com/sites/MLA/search?status=active&limit=20&q=${consulta}`)
      .then(arrayConsulta => arrayConsulta.json())
      .then(arrayConsulta => {setResultadoConsulta(arrayConsulta)})
  }, [setResultadoConsulta, consulta])

  if(!resultadoConsulta) return 0

  return (
    <>
      <Navegacion />
      <Container id="containerMostrarProducto">
        <Row className="g-4 pt-5 justify-content-center" >
          {resultadoConsulta.results.map(producto => {
            return (
              <>
                <Card as={Link} to={`/Producto/${producto.id}`} className="flex-sm-row " id="cajaProducto">
                  <Col className="d-flex  align-items-center justify-content-center fotoProducto" sm={{ span: 2, offset: 0 }} style={{height: "150px"}}>
                    <Card.Img src={producto.thumbnail} style={{ width: "100%", maxWidth: "80px", minWidth: "40px", height: "120px" }}></Card.Img>
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
