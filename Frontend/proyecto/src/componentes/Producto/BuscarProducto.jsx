import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Form, Image } from 'react-bootstrap'
import './Buscador.css'
import { useState, useEffect } from 'react'

export default function BuscarProducto() {

  const [consulta, setConsulta] = useState(null)

  return (
    <>
      <Form className="formBuscador">
        <Row >
          <Col xs={8} md={{span:8, offset:1}} >
            <Form.Control name="consulta" type="text" placeholder="Ingrese el producto que desea buscar" id="buscador" style={{minWidth:"100px"}} onChange={ e => setConsulta(e.target.value)}/>
          </Col>
          <Col xs={3} md={2}>
            <Button variant="primary" type="submit" id="boton" className="d-flex justify-content-center align-items-center" as={Link} to={`/BuscarProducto/${consulta}`}>
              <Image src={"https://cdn-icons-png.flaticon.com/128/622/622669.png"} id="lupa"></Image>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
