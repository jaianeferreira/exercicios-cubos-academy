export default function resultadoVenda(venda: number, compra: number) {
    const resultadoVenda = venda - compra

    if (resultadoVenda > 0) {
        return `O valor do lucro é: ${resultadoVenda}`
    } else if (resultadoVenda < 0) {
        return `O valor do prejuízo é: ${compra - venda}`
    } else {
        return 'Venda a preço de custo'
    }
}