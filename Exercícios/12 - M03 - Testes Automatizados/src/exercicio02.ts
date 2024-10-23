export default function checagemSenha (senha: string) {
    if (senha.length >= 4 && Number(senha)) {
        return 'SENHA VALIDA'
    } else {
        return 'SENHA INVALIDA'
    }
}