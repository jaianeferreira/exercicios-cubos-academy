const cpf = "00000000-000"

const arrayCPF = cpf.split('')

if (arrayCPF[9] === '-') {
   console.log('CPF VALIDO')
} else {
    console.log('CPF INVALIDO')
}