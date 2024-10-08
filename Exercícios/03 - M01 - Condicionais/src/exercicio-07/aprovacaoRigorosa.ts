export default function solucao(
  media: number,
  frequencia: number,
  projetoFinal: number
): string {
  
  if ((media >= 60 && frequencia >= 75 && projetoFinal > 0) || (frequencia>= 75 && projetoFinal >= 85)) {

    return `APROVADO`

  } else {

    return `REPROVADO`

  }

}
