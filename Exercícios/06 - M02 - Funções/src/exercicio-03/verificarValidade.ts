function verificarValidade (valorLido: number, valoresValidos: number[]): boolean { 
    let valido = false

    for (let i = 0; i < valoresValidos.length; i++) {
        if (valorLido === valoresValidos[i]) {
           valido = true
           break
        }
    }  
    return valido
}

export default verificarValidade;
