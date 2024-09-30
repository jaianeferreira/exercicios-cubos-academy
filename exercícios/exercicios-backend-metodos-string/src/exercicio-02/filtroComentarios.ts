function solucao(comentario: string): boolean {

  const comentario2 = comentario.toUpperCase() 

  if (comentario2.indexOf('COVID') !== -1 || comentario2.indexOf('PANDEMIA') !== -1) {
    return false 
  } else {
    return true
  }
}
export default solucao;
