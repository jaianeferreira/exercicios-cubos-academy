import { Router } from "express";
import { cadastrar, editar, excluir, home, listaExames } from "./controladores";
import { validacao } from "./intermediarios";

const rotas = Router()

rotas.get('/', home)

rotas.post('/exames', validacao, cadastrar)

rotas.get('/exames', listaExames)

rotas.put('/exames/:id', validacao, editar)

rotas.delete('/exames/:id', excluir)

export default rotas