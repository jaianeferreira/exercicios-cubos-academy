function solucao(email: string): string {

  const emailValido = email.includes('@')

  if (emailValido === true) {
    return 'VALIDO'
  } else {
    return 'INVALIDO'
  }

}
export default solucao;
