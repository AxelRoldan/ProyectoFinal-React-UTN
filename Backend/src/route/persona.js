import  express  from "express";
import crearPersona from "../controller/persona.js";

const router = express.Router()

router.post('/', crearPersona)

export default {
    router
}