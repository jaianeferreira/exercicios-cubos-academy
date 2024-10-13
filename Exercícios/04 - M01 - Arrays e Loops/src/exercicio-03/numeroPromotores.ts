function solucao(notas: number[]): number { 
  let somaPromotores = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 9) {
        somaPromotores += 1
    } 
  }
  return somaPromotores
}

export default solucao;
