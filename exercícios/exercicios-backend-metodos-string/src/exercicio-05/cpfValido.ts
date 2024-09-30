function solucao(cpf: string): string {
  
  const arrayCPF = cpf.split('')

  if (arrayCPF[9] === '-') {
    return 'CPF VALIDO'
  } else {
    return 'CPF INVALIDO'
  }
}
export default solucao;
