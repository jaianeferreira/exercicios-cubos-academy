function solucao(palavra: string): boolean {
  
  let vogal: boolean = false

  for (let letra of palavra) {

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {

        vogal = true

    }

  }

  return vogal

}

export default solucao;
