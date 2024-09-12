type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {

  let lojaPreco = ""
  let [{preco: precoAtual}] = produtosEncontrados

  for (let i = 0; i < produtosEncontrados.length; i++) {
    if (produtosEncontrados[i].preco <= precoAtual) {
      precoAtual = produtosEncontrados[i].preco
      lojaPreco = produtosEncontrados[i].loja
    }
  }

return lojaPreco

}

export default solucao;
