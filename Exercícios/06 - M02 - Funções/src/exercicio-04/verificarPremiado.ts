type TPessoa = {
    nome: string,
    numeroCartela: number
}

const verificarPremiado = (numeroSorteado: number, pessoasConcorrendo: TPessoa[]): string => {

    let ganhador = "undefined"

    for (let i = 0; i < pessoasConcorrendo.length; i++) {
        if (pessoasConcorrendo[i].numeroCartela === numeroSorteado) {
            
            ganhador = pessoasConcorrendo[i].nome
            break
        } 
    }

    return ganhador
    
}

export default verificarPremiado;
