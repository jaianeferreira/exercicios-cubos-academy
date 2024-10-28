import { Request, Response } from "express"

const numero1 = Number(process.env.NUM_1)
const numero2 = Number(process.env.NUM_2)

export const soma = (req: Request, res: Response) => {
    res.send(String(numero1 + numero2))
    return
}

export const subtracao = (req: Request, res: Response) => {
    res.send(String(numero1 - numero2))
    return
}

export const divisao = (req: Request, res: Response) => {
    res.send(String(numero1 / numero2))
    return
}

export const multiplicacao = (req: Request, res: Response) => {
    res.send(String(numero1 * numero2))
    return
}