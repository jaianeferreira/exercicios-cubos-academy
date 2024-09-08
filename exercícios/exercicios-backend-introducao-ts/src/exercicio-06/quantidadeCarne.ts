function solucao(
  quantidadeCriancas: number,
  quantidadePreAdolescentes: number,
  quantidadeTotal: number
): number {
  
return ((quantidadeCriancas * 100) + (quantidadePreAdolescentes * 200) + ((quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes) * 300))

}

export default solucao;
