function solucao(agenda: string[], cancelamento: string): string | string[] {

  const encontrado = agenda.indexOf(cancelamento) // 'encontrado' recebe o indíce do nome do paciente que quer cancelar, se houver

  if (agenda.includes(cancelamento)) { // se for verdade (true) que há o nome do paciente que quer cancelar na agenda 
    agenda.splice(encontrado, 1) // remove o nome da agenda de acordo com o indíce e atualiza
    return agenda // retorna a agenda atualizada
  }

  return 'PACIENTE NAO AGENDADO'

}
export default solucao;
