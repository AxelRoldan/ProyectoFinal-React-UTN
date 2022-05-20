import express from "express";
import cors from 'cors'
import routerPersona from './route/persona.js'
import baseDeDatos from './model/BD.js'
import fetch from 'node-fetch'

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: "*/*" }))
app.use(cors())

baseDeDatos.conectar()

app.get('/', (req, res) => {
    res.json({valor: "todo bien"})
})

app.use("/api/datosPersona", routerPersona.router)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

