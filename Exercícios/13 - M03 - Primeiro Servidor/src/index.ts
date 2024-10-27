import 'dotenv/config'

import express from 'express'

import rotas from './rotas'

const servidor = express()

servidor.use(rotas)

servidor.listen(3000)


