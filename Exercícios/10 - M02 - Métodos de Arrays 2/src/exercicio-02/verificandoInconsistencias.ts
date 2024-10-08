function solucao(cpfsCadastrados: string[]): string {
    const validarCPFs = cpfsCadastrados.every((cpf) => {
      return cpf.length === 11
    })

    if (validarCPFs) {
      return 'PLANILHA VALIDA'
    } else {
      return 'PLANILHA INVALIDA'
    }
}

export default solucao;
