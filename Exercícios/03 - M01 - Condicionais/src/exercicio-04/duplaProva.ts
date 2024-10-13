export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  if ((notaAlunoA - notaAlunoB) >= 1.5 || (notaAlunoA - notaAlunoB) <= -1.5) {
    return `DUPLA INVALIDA`
  } else {
    return `DUPLA VALIDA`
  }
}
