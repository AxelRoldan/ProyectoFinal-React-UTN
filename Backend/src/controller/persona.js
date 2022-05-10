import baseDeDatos from '../model/BD.js'

const crearPersona = (req, res) => {

    let nuevaPersona = req.body

    let persona = baseDeDatos.crearPersona(nuevaPersona.nombre)

    res.json({
        valor1: persona
    })
}

export default crearPersona