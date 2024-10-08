function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {
  if (ordemAlfabetica) {
    listaAlunos.sort((item1, item2) => {
      return item1.localeCompare(item2)
    })
  } 
  return listaAlunos
  
}
export default solucao;
