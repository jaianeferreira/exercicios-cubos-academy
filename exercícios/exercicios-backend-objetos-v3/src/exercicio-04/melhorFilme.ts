type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  let mediaFilme1 = filme1.notas
  let mediaFilme2 = filme2.notas

  if (mediaFilme1 > mediaFilme2) {
    return filme1.nome
  } else if (mediaFilme2 > mediaFilme1) {
    return filme2.nome
  } else {
    return "EMPATE"
  }
}

export default solucao;
