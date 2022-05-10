import mongoose from "mongoose";

function conectar() {
    mongoose.connect('mongodb://localhost:27017/prueba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

function crearPersona(nombreDeLaPersona) {
    const Persona = mongoose.model('animal', { name: String });

    const nuevaPersona = new Persona({ name: nombreDeLaPersona });
    nuevaPersona.save().then(() => console.log('meow'));

    return nuevaPersona
}

export default {
    conectar,
    crearPersona
}