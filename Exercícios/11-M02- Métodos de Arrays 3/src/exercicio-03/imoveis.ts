type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  if (anuncios.length !== 0) {
    anuncios.sort((item1, item2) => {
      return item1.preco - item2.preco
    })
    return anuncios
  } 
  return 'NAO ENCONTRADO'
}
export default solucao;
