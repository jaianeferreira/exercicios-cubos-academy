type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  const resultado = times.filter((time) => {
    return time.pais === paisFiltrado
  })
  if (resultado.length !== 0) {
    resultado.sort((item1, item2) => {
        return item2.quantidadeTitulos - item1.quantidadeTitulos
      })
      return resultado
  }
  return 'NAO ENCONTRADO'
}
export default solucao;
