export default function solucao(pontosA: number, pontosB: number): string {
  
  if ((pontosA - pontosB) >= 2 && pontosA >= 25) {

    return `TIME A VENCEU O SET`

  } else if ((pontosB - pontosA) >= 2 && pontosB >= 25) {

    return `TIME B VENCEU O SET`

  } else if ((pontosA > pontosB) && pontosA < 25 || (pontosA > pontosB) && (pontosA - pontosB) <= 2 && pontosA > 25) {

    return `TIME A VENCENDO`

  } else if ((pontosA < pontosB) && pontosB < 25 || (pontosB > pontosA) && (pontosB - pontosA) <= 2 && pontosB > 25) {

    return `TIME B VENCENDO`

  } else {

    return `JOGO EMPATADO`

  }

}
