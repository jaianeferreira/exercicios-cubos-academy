type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
    if (filtroPreco  === 'crescente') {
      precos.sort((item1, item2) => {
        return item1 - item2
      })
    } else {
      precos.sort((item1, item2) => {
        return item2 - item1
      })
    }
    return precos  
}
export default solucao;
