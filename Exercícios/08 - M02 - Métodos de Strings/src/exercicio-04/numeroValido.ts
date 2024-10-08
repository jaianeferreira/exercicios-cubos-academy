function solucao(endereco: string): boolean {

  const arrayEnderec = endereco.split(', ')

  const numero = Number(arrayEnderec[1])

  if (numero >= 0) {
      return true
  } else {
      return false
  }

}

export default solucao;
