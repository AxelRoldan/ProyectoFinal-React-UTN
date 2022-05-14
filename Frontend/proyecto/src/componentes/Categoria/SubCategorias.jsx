import react, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"

const SubCategorias = () => {


    const [subCategorias, setSubCategorias] = useState(null)

    useEffect(() => {

        fetch(`https://api.mercadolibre.com/categories/`)
            .then(subCategorias => subCategorias.json())
            .then(subCategorias => setSubCategorias(subCategorias))

    }, [setSubCategorias])

    if (!subCategorias) return 0

    return (
        <>
            {subCategorias.map(categoria => {
                return (
                    <>
                        <NavDropdown.Item as={Link} to={`/Categoria/${categoria.id}`} onMouseOver={() => SubCategorias}>{categoria.id}<div><p></p></div></NavDropdown.Item>
                    </>
                )
            })}
        </>
    )
}

export default SubCategorias