// IMPLEMENTE AQUI A SUA FUNÇÃO
type TImovel = {
  titulo: string;
  descricao: string;
  preco: number;
};
function solucao(anuncios: TImovel[], precoMaximo: number): TImovel[] | string {
  const imoveisDisponiveis = anuncios.filter((i) => {
    return i.preco <= precoMaximo
  } )
   
  if (imoveisDisponiveis.length !== 0) {
    return imoveisDisponiveis
  } 

  return 'NAO ENCONTRADO'
}
export default solucao;
