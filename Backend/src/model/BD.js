import mongoose from "mongoose";

function conectar() {
    mongoose.connect('mongodb://localhost:27017/prueba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export default {
    conectar
}