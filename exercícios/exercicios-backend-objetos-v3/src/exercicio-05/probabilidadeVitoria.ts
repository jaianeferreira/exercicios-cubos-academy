type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {

  let probab = 0
  let resultado = 0

  for (let i = 0; i < dados.probabilidades.length; i++) {
    probab += dados.probabilidades[i]

  }

  resultado = (probab/dados.probabilidades.length)

  if (resultado >= 0) {
    return resultado
  } else {
    return "DADOS INSUFICIENTES"
  }
}

export default solucao;
