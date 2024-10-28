import 'dotenv/config'
import express from 'express'
import {soma, subtracao, divisao, multiplicacao} from './controladores'

const app = express()

app.get('/soma', soma)
app.get('/subtracao', subtracao)
app.get('/divisao', divisao)
app.get('/multiplicacao', multiplicacao)

app.listen(3000)


