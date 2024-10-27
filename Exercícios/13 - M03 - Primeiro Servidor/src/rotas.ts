import {soma, subtracao, divisao, multiplicacao} from '../src/calculo'

import express from 'express'

const rotas = express() 

rotas.get('/soma', soma)
rotas.get('/subtracao', subtracao)
rotas.get('/divisao', divisao)
rotas.get('/multiplicacao', multiplicacao)

export default rotas