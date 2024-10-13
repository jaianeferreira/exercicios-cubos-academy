export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  if ((marcacaoRoleta * precoPassagem) === quantidadeCaixa) {
    return `TUDO CERTO`
  } else if ((marcacaoRoleta * precoPassagem) > quantidadeCaixa) {
    return `DINHEIRO FALTANDO`
  } else {
    return `DINHEIRO SOBRANDO`  
  }

}
