import 'dotenv/config'
import express from 'express'
import { convidados, convidadosID, lista } from './controladores'
import { intermediario } from './intermediarios'

const app = express()

app.get('/', lista)

app.get('/convidados', intermediario, convidados)

app.get('/convidados/:id', convidadosID)

app.listen(process.env.PORT)