import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navegacion from '../Navbar/Navbar'

export default function Producto() {

    const {id: consulta} = useParams()
    const [resultadoConsulta, setResultadoConsulta] = useState(null)

    useEffect( () => {

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${consulta}`)
            .then( arrayConsulta => arrayConsulta.json())
            .then( arrayConsulta => {
                setResultadoConsulta(arrayConsulta)
                console.log(arrayConsulta)})
    }, [setResultadoConsulta, consulta])

  return (
    <>
    <Navegacion />
    </>
  )
}
