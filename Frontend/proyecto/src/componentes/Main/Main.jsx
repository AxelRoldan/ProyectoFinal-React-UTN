import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Carousel, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TempleteCarga from '../TempleteCarga'
import './Main.css'

export default function Main() {

  const [componentes, setComponentes] = useState(null)
  const [heladeras, setHeladeras] = useState(null)
  const [motos, setMotos] = useState(null)
  let mayor = "<"
  let menor = ">"

  //Varias peticiones poco eficaces pero hechas con el proposito de acceder a imagenes de buena calidad para poder renderizarlas
  useEffect(() => {

    fetch("https://api.mercadolibre.com/sites/MLA/search?limit=10&category=MLA3794&discount=30-100")
      .then(arrayComponentes => arrayComponentes.json())
      .then(arrayComponentes => {
        fetch(`https://api.mercadolibre.com/items?ids=${arrayComponentes.results[0].id},${arrayComponentes.results[1].id},${arrayComponentes.results[2].id}`)
          .then(componentes => componentes.json())
          .then(componentes => setComponentes(componentes))
      })

    fetch("https://api.mercadolibre.com/sites/MLA/search?limit=10&category=MLA1055")
      .then(arrayHeladeras => arrayHeladeras.json())
      .then(arrayHeladeras => {
        fetch(`https://api.mercadolibre.com/items?ids=${arrayHeladeras.results[0].id},${arrayHeladeras.results[1].id},${arrayHeladeras.results[2].id}`)
          .then(heladeras => heladeras.json())
          .then(heladeras => setHeladeras(heladeras))
      })

    fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=10&category=MLA409810`)
      .then(arrayMotos => arrayMotos.json())
      .then(arrayMotos => {
        fetch(`https://api.mercadolibre.com/items?ids=${arrayMotos.results[0].id},${arrayMotos.results[1].id},${arrayMotos.results[2].id}`)
          .then(motos => motos.json())
          .then(motos => setMotos(motos))
      })


  }, [setComponentes, setHeladeras, setMotos])

  if (!componentes) return <Container id="containerMostrarProducto"  style={{height:"700px"}}></Container>
  if (!heladeras) return <Container id="containerMostrarProducto"  style={{height:"700px"}}></Container>
  if (!motos) return <Container id="containerMostrarProducto"  style={{height:"700px"}}></Container>

  return (
    <>
      <Container id="containerMostrarProducto">
        <Row className="justify-content-evenly pt-5">
          <Col sm={3} className="columnaCarrousel" >
            <h2 className="titulosProducto">Musica y accesorios</h2>
            <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                motos.map(moto => {
                  return (
                    <Carousel.Item >
                      <Col className="d-flex flex-wrap justify-content-center">
                        <Card style={{ width: '18rem', height: "400px" }} className="align-items-center">
                          <Card.Img variant="top" src={moto.body.pictures[0].url} className="imagenCarrousel" style={{width:"auto"}}/>
                          <Card.Body className="d-flex justify-content-end flex-column">
                            <Card.Title>
                              <p>{moto.body.title}</p>
                            </Card.Title>
                            <Button as={Link} to={`/Producto/${moto.body.id}`} variant="primary" id="agregarAlCarrito">Ir al producto</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
          <Col sm={3} className="columnaCarrousel">
          <h2 className="titulosProducto">Celulares y smartphones</h2>
            <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                heladeras.map(heladera => {
                  return (
                    <Carousel.Item >
                      <Col className="d-flex flex-wrap justify-content-center">
                        <Card style={{ width: '18rem', height: "400px" }} className="align-items-center">
                          <Card.Img variant="top" src={heladera.body.pictures[0].url} className="imagenCarrousel" style={{width:"auto"}}/>
                          <Card.Body className="d-flex justify-content-end flex-column">
                            <Card.Title>
                              <p>{heladera.body.title}</p>
                            </Card.Title>
                            <Button as={Link} to={`/Producto/${heladera.body.id}`} variant="primary" id="agregarAlCarrito">Ir al producto</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
          <Col sm={3} className="columnaCarrousel" >
          <h2 className="titulosProducto">Celulares y smartphones</h2>
            <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                componentes.map(componente => {
                  return (
                    <Carousel.Item >
                      <Col className="d-flex flex-wrap justify-content-center">
                        <Card style={{ width: '18rem', height: "400px" }} className="align-items-center">
                          <Card.Img variant="top" src={componente.body.pictures[0].url} className="imagenCarrousel" style={{width:"auto"}}/>
                          <Card.Body className="d-flex justify-content-end flex-column">
                            <Card.Title>
                              <p>{componente.body.title}</p>
                            </Card.Title>
                            <Button as={Link} to={`/Producto/${componente.body.id}`} variant="primary" id="agregarAlCarrito">Ir al producto</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col xl={12} className="d-flex justify-content-center">
          <Image id="imagenOferta"src={"https://i.ibb.co/SR8hLn6/BLACKFRIDAY.png"} ></Image>
          </Col>
        </Row>
      </Container>
    </>
  )
}
