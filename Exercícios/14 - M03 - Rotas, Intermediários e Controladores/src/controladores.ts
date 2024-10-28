import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";

export const lista = (req: Request, res: Response): any => {
    return res.send('API de lista de convidados')
}

export const convidados = (req: Request, res: Response): any => {
    const { idadeMaxima } = req.query

    const idadeMax = bancoDeDados.filter((i) => {
        return i.idade <= Number(idadeMaxima)
    })

    if (idadeMaxima) {
        return res.send(idadeMax) 
    }

    return res.send(bancoDeDados)  
}

export const convidadosID = (req: Request, res: Response): any => {
    const { id } = req.params

    const convidado = bancoDeDados.find((i) => {
        return i.id === Number(id)
    })

    if (!convidado) {
      return res.send('Convidado não encontrado')
    }

    return res.send(convidado)
}