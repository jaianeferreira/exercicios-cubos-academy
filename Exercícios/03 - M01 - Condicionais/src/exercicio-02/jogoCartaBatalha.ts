export default function solucao(monstro1: number, monstro2: number): string {
  
  if (monstro1 > monstro2) {

    return `JOGADOR 1 GANHOU`

  } else if (monstro2 > monstro1) {

    return `JOGADOR 2 GANHOU`

  } else {

    return `EMPATE`

  }

}
