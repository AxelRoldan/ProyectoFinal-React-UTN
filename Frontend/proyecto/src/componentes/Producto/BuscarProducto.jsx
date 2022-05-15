import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Form } from 'react-bootstrap'
import './Buscador.css'
import { useState, useEffect } from 'react'

export default function BuscarProducto() {

  const [consulta, setConsulta] = useState(null)

  return (
    <>
      <Form className="formBuscador">
        <Row >
          <Col xs={12} md={{span:8, offset:2}} lg={{span:8 , offset: 2}} xl={{span:8, offset:0}}>
            <Form.Control name="consulta" type="text" placeholder="Ingrese el producto que desea buscar" style={{minWidth:"100px"}} onChange={ e => setConsulta(e.target.value)}/>
          </Col>
          <Col xs={{span:8 , offset:2}} lg={{span:2, offset:0}} md={{span:2, offset:0}} xl={{span:2, offset:0}}>
            <Button variant="primary" type="submit" className="caja" as={Link} to={`/BuscarProducto/${consulta}`}>
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
