function solucao(comprimento, largura, rendimento) {
  
  let a = comprimento * largura

  let quantidade_tinta_necessaria = a * rendimento 

  return quantidade_tinta_necessaria 

}

module.exports = solucao;
