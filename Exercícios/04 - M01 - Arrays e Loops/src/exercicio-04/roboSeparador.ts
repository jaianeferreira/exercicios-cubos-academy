function solucao(frutaColetada: string, esteira: string[]): number { 
  let somaFruta = 0

  for (let item of esteira) {  
    if (item === frutaColetada) {
    somaFruta += 1
    }
  }
  return somaFruta
}

export default solucao;
