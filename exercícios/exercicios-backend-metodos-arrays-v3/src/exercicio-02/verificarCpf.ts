function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  
  if (cpfsCadastrados.includes(cpfDigitado)) {

    return 'CPF JA CADASTRADO'

  } else {

    cpfsCadastrados.push(cpfDigitado)

    return 'CADASTRO REALIZADO COM SUCESSO'
  }

 
}
export default solucao;
