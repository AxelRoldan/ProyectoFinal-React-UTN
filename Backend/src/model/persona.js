import mongoose from 'mongoose'
import fetch from 'node-fetch'

async function crearPersona(nombreDeLaPersona) {

    let objetoMeli = await fetch('https://api.mercadolibre.com/items/MLA1118437081?include_attributes=all')
    let respuestaObjMeli = await objetoMeli.json()

    const MeliObjeto = mongoose.model('ObjetoMeliYPersona', { 
        objetoMeli: Object,
        name:  String,
        surname: String,
        dni: String
    });

    const kitty = new MeliObjeto({ 
        objetoMeli: respuestaObjMeli,
        name: nombreDeLaPersona.nombre,
        surname: nombreDeLaPersona.apellido,
        dni: nombreDeLaPersona.dni
    });
    kitty.save().then(() => console.log('meow'));

    return 1
}

export default crearPersona