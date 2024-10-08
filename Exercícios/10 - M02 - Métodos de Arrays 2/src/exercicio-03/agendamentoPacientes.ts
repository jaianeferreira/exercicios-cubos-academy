function solucao(tipoItensCarrinho: string[], idadeCliente: number): string {
  const compras = tipoItensCarrinho.some((item) => {
    return item === 'bebida com alcool'
  })

  if (idadeCliente < 18 && compras) { // se idadeCliente menor que 18 e compras seja verdadeiro (true) para item alcoolico 
    return 'COMPRA BLOQUEADA'
  } else {
    return 'COMPRA EFETUADA'
  }
}
export default solucao;
