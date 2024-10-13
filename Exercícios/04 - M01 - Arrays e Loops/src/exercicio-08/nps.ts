function solucao(notas: number[]): number {
  let promotores = 0;
  let detratores = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 9) {
      promotores += 1
    } else if (notas[i] <= 6) {
      detratores += 1 
    }
  }
  return ((promotores - detratores)/notas.length) * 100

}

export default solucao;
