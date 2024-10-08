function solucao(jogadorA: number[]): string {
  
  let somaBolasEncaçapadas = 0

  for (let i = 0; i < jogadorA.length; i++) {

    somaBolasEncaçapadas += jogadorA[i]
  }

  if (somaBolasEncaçapadas > 60) {

    return "JOGADOR A GANHOU"

  } else if (somaBolasEncaçapadas < 60) {

    return "JOGADOR B GANHOU"

  } else {

    return "EMPATE"

  }

}

export default solucao;
