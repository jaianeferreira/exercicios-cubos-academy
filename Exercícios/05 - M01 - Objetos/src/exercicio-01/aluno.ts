type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  const dadosAluno = {
    matricula,
    nome,
    idade
  }
  return dadosAluno
}

export default solucao;
