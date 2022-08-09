// Utilize o if ternário para construir uma função que recebe o número do dias e
// retorna se pertence a primeira ou a segunda quinzena

const retornaQuinzena = diaDoMes =>
  diaDoMes >= 1 && diaDoMes <= 15 ? 'Primeira Quinzena' : 'Segunda Quinzena';

console.log(retornaQuinzena(21));
