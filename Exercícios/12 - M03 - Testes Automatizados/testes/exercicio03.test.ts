import exercicio03 from '../src/exercicio03'

describe('validar envio dos dados de cadastro', () => {
    it('verifica se o usuário enviou todos os dados', () => {
        const dados = {
            nome: 'jaiane',
            email: 'jaiane@gmail.com',
            senha: '1234'
        }
        expect(exercicio03(dados)).toBe(true)
    })

    it('verifica que o usuário não enviou todos os dados', () => {
        const dados = {
            nome: 'joao',
            senha: '321'
        }
        expect(exercicio03(dados)).toBe('Todos os campos são obrigatórios')
        const dados1 = {
            nome: 'joao',
            email: 'joao@outlook.com'
        }
        expect(exercicio03(dados1)).toBe('Todos os campos são obrigatórios')
        const dados2 = {
            senha: '321',
            email: 'joao@outlook.com'
        }
        expect(exercicio03(dados2)).toBe('Todos os campos são obrigatórios')
    })
})