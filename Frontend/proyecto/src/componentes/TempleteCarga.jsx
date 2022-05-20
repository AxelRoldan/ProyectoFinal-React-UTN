import React from 'react'
import Navegacion from './Navbar/Navbar'
import Footer from './Footer/Footer'
import {Container} from 'react-bootstrap'

function TempleteCarga() {
    return (
        <>
            <Navegacion />
            <Container id="containerMostrarProducto" style={{ height: "700px" }}>
            </Container>
            <Footer />
        </>
    )
}

export default TempleteCarga