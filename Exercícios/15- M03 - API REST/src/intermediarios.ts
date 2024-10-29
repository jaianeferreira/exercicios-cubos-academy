import { NextFunction, Request, Response } from "express";

export const validacao = (req: Request, res: Response, next: NextFunction): any => {
    const { examinador, candidato, quantidade_eliminatorias, quantidade_graves, quantidade_medias, quantidade_leves } = req.body

    if (!examinador || !candidato || quantidade_eliminatorias === undefined || quantidade_graves === undefined || quantidade_medias=== undefined || quantidade_leves === undefined) {
        return res.status(404).json({
            mensagem: 'Preencha todos os campos obrigatórios.'})
    }

    next()

}