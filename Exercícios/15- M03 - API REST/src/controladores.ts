import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'
import bancoDeDados from "../bancoDeDados";

export const home = (req: Request, res: Response): any => {
    return res.send('API de exames de direção')

}

export const cadastrar = (req: Request, res: Response): any => {
    const { examinador, candidato, quantidade_eliminatorias, quantidade_graves, quantidade_medias, quantidade_leves, aprovado } = req.body

    const novoExame = {
        id: uuidv4(),
        examinador,
        candidato,
        quantidadeEliminatorias: quantidade_eliminatorias,
        quantidadeGraves: quantidade_graves,
        quantidadeMedias: quantidade_medias, 
        quantidadeLeves: quantidade_leves, 
        aprovado
    }

    bancoDeDados.exames.push(novoExame)

    return res.status(201).json(novoExame)
}

export const listaExames = (req: Request, res: Response): any => {
    const { aprovado } = req.query

    if (!aprovado) {
       res.send(bancoDeDados.exames)

    } else if (aprovado === String(true)) {
        const listaAprovado = bancoDeDados.exames.filter((i) => {
            return i.aprovado === true
        })
        return res.send(listaAprovado)

    } else if (aprovado === String(false)) {
        const listaReprovado = bancoDeDados.exames.filter((i) => {
            return i.aprovado === false
        })
        return res.send(listaReprovado)
    }   
}

export const editar = (req: Request, res: Response): any => {
    const { id } = req.params
    const { examinador, candidato, quantidade_eliminatorias, quantidade_graves, quantidade_medias, quantidade_leves } = req.body

    const exame = bancoDeDados.exames.find((i) => {
        return i.id === id
    })

    if (!exame) {
        return res.status(404).json({
        mensagem: 'Exame não encontrado.'})
    }

    exame.examinador = examinador
    exame.candidato = candidato
    exame.quantidadeEliminatorias = quantidade_eliminatorias
    exame.quantidadeGraves = quantidade_graves
    exame.quantidadeMedias = quantidade_medias
    exame.quantidadeLeves = quantidade_leves

    return res.send(exame)
}

export const excluir = (req: Request, res: Response): any => {
    const { id } = req.params

    const exameIndex = bancoDeDados.exames.findIndex((i) => {
        return i.id === id
    })

    if (exameIndex === -1) {
        return res.json({
            mensagem: "Exame não encontrado."
        })
    }

    bancoDeDados.exames.splice(exameIndex, 1)

    return res.status(204).send()
}

