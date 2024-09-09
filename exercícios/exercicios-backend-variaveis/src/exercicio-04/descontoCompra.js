function solucao(preco, valorDesconto) {
  
  let precofinal = preco - (preco * (valorDesconto/100))

  return precofinal

}

module.exports = solucao;
