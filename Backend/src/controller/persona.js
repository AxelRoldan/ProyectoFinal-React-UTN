import baseDeDatos from '../model/BD.js'
import model from '../model/persona.js'

const recibirPersona = async (req, res) => {

    let nuevaPersona = req.body

    res.json({
        valor1: await model.crearPersona(nuevaPersona)
    })
}

const traerCompra = async (req, res) => {

    let compra = await model.traerCompra(req.params.id)
    res.json({
        valor: compra
     })
}

const eliminarCompra = async (req, res) => {

    let compra = await model.borrarCompra(req.params.id)
    res.json({
        valor: compra
     })
}

export default {
    recibirPersona,
    traerCompra,
    eliminarCompra
}