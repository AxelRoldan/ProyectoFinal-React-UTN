import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Carousel, Card } from 'react-bootstrap'
import './Main.css'

export default function Main() {

  const [componentes, setComponentes] = useState(null)
  const [heladeras, setHeladeras] = useState(null)
  const [motos, setMotos] = useState(null)
  let mayor="<"
  let menor=">"

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

  if (!componentes) return 0
  if (!heladeras) return 0
  if (!motos) return 0

  return (
    <>
      <Container id="containerMostrarProducto">
        <Row className="justify-content-evenly pt-5">
          <Col sm={3} className="columnaCarrousel" >
            <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                heladeras.map(heladera => {
                  return (
                    <Carousel.Item >
                      <Col className="d-flex flex-wrap justify-content-center">
                        <Image  className="imagenCarrousel" src={heladera.body.pictures[0].url}></Image>
                        <p>{heladera.body.title}</p>
                        </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
          <Col sm={3} className="columnaCarrousel">
          <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                componentes.map(componente => {
                  return (
                    <Carousel.Item >
                      <Col className="d-flex flex-wrap justify-content-center">
                        <Image  className="imagenCarrousel" src={componente.body.pictures[0].url}></Image>
                        <p>{componente.body.title}</p>
                        </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
          <Col sm={3} className="columnaCarrousel" >
          <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon signoMayor" />} nextIcon={<span className="carousel-control-next-icon signoMayor" />}>
              {
                motos.map(moto => {
                  return (
                    <Carousel.Item >
                        <Col className="d-flex">
                        <Image  className="imagenCarrousel" src={moto.body.pictures[0].url}></Image>
                        <p>{moto.body.title}</p>
                        </Col>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}
