import baseDeDatos from '../model/BD.js'
import modeloPersona from '../model/persona.js'

const crearPersona = async (req, res) => {

    let nuevaPersona = req.body

    res.json({
        valor1: await modeloPersona(nuevaPersona)
    })
}

export default crearPersona