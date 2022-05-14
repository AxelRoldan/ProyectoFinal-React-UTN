import React, { useState, useEffect } from 'react'
import Navegacion from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'

export default function Categoria() {

  const { id } = useParams()
  const [categoria, setCategoria] = useState(null)

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/categories/${id}`)
      .then(categoriaElegida => categoriaElegida.json())
      .then(categoriaElegida => setCategoria(categoriaElegida))
  }, [setCategoria])

  if(!categoria) return "hola"

  return (
    <>
      <Navegacion />
      
      <Footer />
    </>
  )
}
