import React, { useState, useEffect } from 'react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { Container, Image, Row, Col } from 'react-bootstrap'
import TraerCategorias from './TraerCategorias'
import TempleteCarga from '../TempleteCarga'

export default function Categoria() {

  const { id } = useParams()  //ID de la categoria que eligio el usuario
  const [categoria, setCategoria] = useState(null)  

  useEffect(() => { //Traigo las subcategorias de una categoria en especifica
    fetch(`https://api.mercadolibre.com/categories/${id}`)
      .then(categoriaElegida => categoriaElegida.json())
      .then(categoriaElegida => {
        console.log(categoriaElegida)
        setCategoria(categoriaElegida)
      })
  }, [setCategoria, id])

  if (!categoria) return <TempleteCarga />

  return (
    <>
      <Navegacion />
      <Container id="containerMostrarProducto">
        <Row style={{ widht: "100%" }} className="productoCompleto">
          <Col xs={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 0 }} className="cajaFoto d-flex flex-column align-items-center mt-5 justify-content-evenly">
            <h1 style={{ textAlign:"center" }}>{categoria.name.toUpperCase()}</h1>
            <Image src={categoria.picture} rounded></Image>
            <h1 style={{ textAlign:"center" }} >{categoria.name.toUpperCase()}</h1>
          </Col>
          <Col xl={6} className="d-flex flex-wrap justify-content-center mt-5">
            {
              categoria.children_categories.map(categoriaHija => {
                return (
                  <>
                    <Link to={`/SubCategoria/Productos/${categoriaHija.id}`} className="cajaSubCategorias d-flex align-items-center justify-content-center">
                      <p style={{ textAlign: "center" }} id="tituloSubCategoria">{categoriaHija.name.toUpperCase()}</p>
                    </Link>
                  </>
                )
              })
            }
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
