function solucao(quantidadePessoas, quantidadeDeJogadoresEmCadaTime) {
  
  let quantidade_jogadores_sem_time = quantidadePessoas % quantidadeDeJogadoresEmCadaTime

  return quantidade_jogadores_sem_time

}

module.exports = solucao;
