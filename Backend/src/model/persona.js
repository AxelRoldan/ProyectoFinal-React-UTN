import mongoose from 'mongoose'

const personaSchema = mongoose.Schema( {
    objetoMeli: Object,
    usuario: String
})

const MeliObjeto = mongoose.model('objetofinal', personaSchema);

async function crearPersona(nombreDeLaPersona) {

    const kitty = new MeliObjeto({
        objetoMeli: nombreDeLaPersona.producto,
        usuario: nombreDeLaPersona.nombre
    });
    kitty.save().then(() => console.log('meow'));

    return kitty
}

async function traerCompra(userEmail) {

    let listaCompras = await MeliObjeto.find({usuario: userEmail})
    console.log(listaCompras)
    return listaCompras
}

async function borrarCompra(userEmail) {

    let listaCompras = await MeliObjeto.remove({usuario: userEmail})
    console.log(listaCompras)
    return listaCompras
}

export default {
    crearPersona,
    traerCompra,
    borrarCompra
}