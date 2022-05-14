import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'
import './Categoria.css'

export default function TraerCategorias() {

    const [categorias, setCategorias] = useState(null)
    const [subCategorias, setSubCategorias] = useState(null)

    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLA/categories')
            .then(categorias => categorias.json())
            .then(categorias => setCategorias(categorias))

    }, [setCategorias, setSubCategorias])


    const habilitarSubMenu = (e) => {

        document.getElementById("subCategoria").classList.remove("cajaSubMenu")
        let valor = e.target.href.split("/")[Object.keys(e.target.href.split("/")).length - 1]
        console.log(valor)

        fetch(`https://api.mercadolibre.com/categories/${valor}`)
            .then(subCategorias => subCategorias.json())
            .then(subCategorias => setSubCategorias(subCategorias))
    }

    if (!categorias) return 0
    if (subCategorias) console.log("VAN DATOS",subCategorias)

    return (
        <Row className="flex-nowrap">
            <Col className="linea">
                {categorias.map(categoria => {

                    return (
                        <>
                            <NavDropdown.Item as={Link} to={`/Categoria/${categoria.id}`} onMouseOver={habilitarSubMenu} id="idCategoria">{categoria.name}</NavDropdown.Item>
                        </>
                    )
                })}
            </Col>
            <Col className="cajaSubMenu" id="subCategoria">
                {
                    subCategorias &&
                    subCategorias.children_categories.map(categoria => {

                        return (
                            <>
                                <NavDropdown.Item>{categoria.name}</NavDropdown.Item>
                            </>
                        )
                    })}
            </Col>
        </Row>
    )

}
