type TAluno = { matricula: string; nome: string; media: number };

function solucao(aluno: TAluno): string {
  if (aluno.media >= 6) {
    return "APROVADO"
  } else {
    return "REPROVADO"
  }
}

export default solucao;
