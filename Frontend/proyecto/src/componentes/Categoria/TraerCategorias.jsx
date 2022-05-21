import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'
import TempleteCarga from '../TempleteCarga'
import './Categoria.css'

export default function TraerCategorias() {

    const [categorias, setCategorias] = useState(null)
    const [subCategorias, setSubCategorias] = useState(null)

    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLA/categories')
            .then(categorias => categorias.json())
            .then(categorias => setCategorias(categorias))

    }, [setCategorias, setSubCategorias])


    const habilitarSubMenu = (e) => {   //Funcion que se activa al hacer hover sobre una categoria principal
                                        //Luego trae el elemento que recibio el hover y realiza una consulta en base a eso
        document.getElementById("subCategoria").classList.remove("cajaSubMenu")
        let idSubCategoria = e.target.parentNode.firstChild.textContent

        fetch(`https://api.mercadolibre.com/categories/${idSubCategoria}`)
            .then(subCategorias => subCategorias.json())
            .then(subCategorias => setSubCategorias(subCategorias))
    }

    if (!categorias) return <TempleteCarga />

    //Hay un div hidden con la categoriaID de una categoria para traerda con la api de document

    return (
        <Row className="flex-nowrap" onMouseLeave={() => setSubCategorias(null)} >
            <Col className="">
                {categorias.map(categoria => {
                    return (
                        <>
                            <div>
                                <div className='esconder' id="idCategoria" >{categoria.id}</div>
                                <NavDropdown.Item as={Link} to={`/Categoria/${categoria.id}`} id="categoria" onMouseOver={habilitarSubMenu}>{categoria.name}</NavDropdown.Item>
                            </div>
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
                                <NavDropdown.Item as={Link} to={`/SubCategoria/Productos/${categoria.id}`} id="subCategoriaCelda">{categoria.name}</NavDropdown.Item>
                            </>
                        )
                    })}
            </Col>
        </Row>
    )

}
