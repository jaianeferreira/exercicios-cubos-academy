type Tdados = {
    nome?: string,
    email?: string,
    senha?: string
}

export default function cadastro(dados: Tdados) {
    if (!dados.nome || !dados.email || !dados.senha) {
       return 'Todos os campos são obrigatórios' 
    }
    return true
}