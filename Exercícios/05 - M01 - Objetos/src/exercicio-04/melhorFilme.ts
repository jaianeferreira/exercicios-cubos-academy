type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  if (filme1.notas > filme2.notas) {
    return filme1.nome
  } else if (filme2.notas > filme1.notas) {
    return filme2.nome
  } else {
    return "EMPATE"
  }
}

export default solucao;
