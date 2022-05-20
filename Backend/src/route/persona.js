import  express  from "express";
import controller from "../controller/persona.js";

const router = express.Router()

router.post('/', controller.recibirPersona)
router.get('/:id', controller.traerCompra)
router.delete('/:id', controller.eliminarCompra)

export default {
    router
}