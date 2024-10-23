import exercicio01 from '../src/exercicio01' 

describe('testes resultado de uma venda', () => {
    test('deve verificar se há prejuízo', () => {
        expect(exercicio01(25, 100)).toBe('O valor do prejuízo é: 75')
    })
    test('deve verificar se há lucro', () => {
        expect(exercicio01(100, 25)).toBe('O valor do lucro é: 75')
    })

    test('deve verificar se não houve lucro', () => {
        expect(exercicio01(100, 100)).toBe('Venda a preço de custo')
    })
})