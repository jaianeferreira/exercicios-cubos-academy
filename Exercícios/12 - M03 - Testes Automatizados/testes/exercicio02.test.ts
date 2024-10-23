import exercicio02 from '../src/exercicio02'

describe('checagem de senha', () => {
    test('verifica uma senha válida', () => {
        expect(exercicio02('1234')).toBe('SENHA VALIDA')
        expect(exercicio02('12345')).toBe('SENHA VALIDA')
        expect(exercicio02('123456')).toBe('SENHA VALIDA')
    })

    test('verifica uma senha inválida', () => {
        expect(exercicio02('123')).toBe('SENHA INVALIDA')
        expect(exercicio02('123a')).toBe('SENHA INVALIDA')
        expect(exercicio02('b234h6')).toBe('SENHA INVALIDA')
    })
})