function solucao(botoesApertados: string[]): string {
  let botaoA1 = 0
  let botaoA2 = 0
  
  for (let botao of botoesApertados) {
      if (botao === "A1") {
          botaoA1  += 1
      } else if (botao === "A2") {
          botaoA2 += 1
      } 
  }
  
  if (botaoA1 > botaoA2) {
      return "NERD"
  } else if (botaoA2 > botaoA1) {
      return "ATLETA"
  } else {
      return "DIVERSIFICADO"
  }
}

export default solucao;
