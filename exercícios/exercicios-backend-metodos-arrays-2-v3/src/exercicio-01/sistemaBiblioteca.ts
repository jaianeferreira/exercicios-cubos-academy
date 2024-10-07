function solucao(livros: string[], livroProcurado: string): string {
    const posicao = livros.findIndex((livro) => {
       return livro === livroProcurado
    })

    if (posicao !== -1) {
      return `O LIVRO ESTA NA POSICAO ${posicao + 1}`
    } else {
      return 'NENHUM LIVRO ENCONTRADO'
    }
}
export default solucao;
