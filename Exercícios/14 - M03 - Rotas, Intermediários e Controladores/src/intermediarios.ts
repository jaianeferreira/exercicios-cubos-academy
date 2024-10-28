import { NextFunction, Request, Response } from "express";

export const intermediario = (req: Request, res: Response, next: NextFunction): any => {
    const { idadeMaxima } = req.query

    if (idadeMaxima !== undefined && isNaN(Number(idadeMaxima))) {
        return res.send('Idade máxima inválida')
    }
    
   next()
}
