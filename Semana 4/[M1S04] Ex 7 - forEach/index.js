// Crie um código javascript para verificar se todos os alunos do array de objetos
// arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma",
// porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".

let arrayAlunos = [
  {
    nome: 'Carlos',
    media: 10,
  },
  {
    nome: 'Julia',
    media: 8,
  },
  {
    nome: 'Rayane',
    media: 6,
  },
  {
    nome: 'Arthur',
    media: 5,
  },
];

let aprovados = [];

arrayAlunos.forEach(function (item) {
  if (item.media >= 7) {
    aprovados.push(item);
  }
});

let alunosAbaixoDaMedia = arrayAlunos.filter(element => {
  return element.media < 7;
});

if (aprovados.length == arrayAlunos.length) {
  console.log('Parabéns a todos da turma.');
} else {
  console.log(alunosAbaixoDaMedia);
}
