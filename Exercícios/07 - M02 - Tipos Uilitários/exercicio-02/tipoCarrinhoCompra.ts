type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type tipoTransacao = Lowercase<"CREDITO" | "dEbItO">
type NovoCarrinho = Omit<Carrinho, "tipoTransacao">

type CarrinhoAtualizado = {
    carrinho: NovoCarrinho,
    tipoTransacao: tipoTransacao,
    endereco: {
        cep: string
        rua: string
        bairro: string
        cidade: string
        estado: string
    }
}
