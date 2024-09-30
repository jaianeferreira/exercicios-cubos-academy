function solucao(numeroCadastrado: string): string {

  const numInicio = numeroCadastrado.slice(0, 2).padEnd(9, '*') 
  const numFim = numeroCadastrado.slice(-2)

  return numInicio + numFim
}

export default solucao;
