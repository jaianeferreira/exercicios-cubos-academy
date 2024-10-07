// IMPLEMENTE AQUI A SUA FUNÇÃO
type TMonstro = {
  nome: string;
  forca: number;
  agilidade: number;
  experiencia: number;
};
function solucao(monstros: TMonstro[]): TMonstro[] {
  const novaFase = monstros.map((item) => {
    return {
      nome: item.nome,
      forca: item.forca,
      agilidade: item.agilidade,
      experiencia: item.experiencia + 10
    }
  })

  return novaFase
}
export default solucao;
