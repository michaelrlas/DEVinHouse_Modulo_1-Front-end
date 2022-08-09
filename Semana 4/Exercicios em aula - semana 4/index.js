// let gabinete = {
//   cor: 'Branco',
//   cooler: 'carnaval',
//   marca: 'Elite',
//   placaMae: 'Asus',
// };

// Exercício em sala

// Em grupos e utilizando o laço de interação foreach execute uma função que irá
//percorrer a seguinte lista de nomes:

// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];

// A cada item deverá ser verificado se o primeiro caractere é B, caso seja,
//adicione toda a string do item em um outro array.

// novoArray = [];
// var names = [
//   'Ben',
//   'Carol',
//   'Iane',
//   'Jafar',
//   'Matt',
//   'Priya',
//   'Brian',
//   'Guilherme',
//   'Bruna',
// ];

// names.forEach(function (item) {
//   if (item[0] == 'B') {
//     novoArray.push(item);
//   }
// });
// document.write(
//   '<h3>Os nomes que começam com a letra B são: ' +
//     '<br/> <br/>' +
//     novoArray +
//     '</h3'
// );

// let array = [
//   {
//     nome: 'Rayane',
//     sobrenome: 'Cristina',
//     idade: 21,
//   },
//   {
//     nome: 'Carlos',
//     sobrenome: 'Henrique',
//     idade: 17,
//   },
//   {
//     nome: 'Julio',
//     sobrenome: 'Cesar',
//     idade: 19,
//   },
//   {
//     nome: 'Camila',
//     sobrenome: 'Fernandes',
//     idade: 18,
//   },
//   {
//     nome: 'Julia',
//     sobrenome: 'Fernandes',
//     idade: 10,
//   },
//   {
//     nome: 'Bruno',
//     sobrenome: 'Albuquerque',
//     idade: 31,
//   },
//   {
//     nome: 'Túlio',
//     sobrenome: 'Bastos',
//     idade: 22,
//   },
//   {
//     nome: 'Cristiane',
//     sobrenome: 'Maria',
//     idade: 41,
//   },
// ];

// let diMaior = array.filter(function (item) {
//   return item.idade >= 18;
// });
// console.log(diMaior);

// let array = [
//   {
//     nome: 'Rayane',
//     sobrenome: 'Cristina',
//     idade: 21,
//   },
//   {
//     nome: 'Julio',
//     sobrenome: 'Cesar',
//     idade: 19,
//   },
//   {
//     nome: 'Camila',
//     sobrenome: 'Fernandes',
//     idade: 18,
//   },
//   {
//     nome: 'Bruno',
//     sobrenome: 'Albuquerque',
//     idade: 31,
//   },
//   {
//     nome: 'Túlio',
//     sobrenome: 'Bastos',
//     idade: 22,
//   },
//   {
//     nome: 'Cristiane',
//     sobrenome: 'Maria',
//     idade: 41,
//   },
// ];

// let maiorDeTrinta = array.find(function (item) {
//   return item.idade >= 30;
// });
// document.write(
//   '<h1> a primeira pessoa com mais de 30 é: ' +
//     maiorDeTrinta.nome +
//     ' ' +
//     maiorDeTrinta.sobrenome +
//     '</h1>'
// );

// Observando o array abaixo e usando o reduce, encontre qual é o item que possui o
//maior valor.
// Dica: se o item atual for maior que o valor anterior, o valor anterior irá
//passar a ser o item atual.

// const array = [1, 22, 31, 40, 3, 5];
// let valorInicial = 0;
// let maiorValor = array.reduce(function (valorAnterior, valorAtual) {
//   if (valorAtual > valorAnterior) {
//     valorAnterior = valorAtual;
//   }
//   return valorAnterior;
// }, valorInicial);
// console.log(maiorValor);

//exercicio 4
// class Serie {
//   nome;
//   anoLancamento;
//   qttTemporada;

//   constructor(nome, anoLancamento, qttTemporada) {
//     this.mome = nome;
//     this.anoLancamento = anoLancamento;
//     this.qttTemporada = qttTemporada;
//   }
// }

// for (let i = 0; i <= 4; i++) {}

const estados = [
  'Sao Paulo',
  'Rio de Janeiro',
  'Amazonas',
  'Pernambuco',
  'Santa Catarina',
  'Rio Grande do Norte',
  'Sergipe',
];

let valorInicial = 0;
let maiorString = estados.reduce(function (valorAnterior, valorAtual) {
  if (valorAtual > valorAnterior) {
    valorAnterior = valorAtual;
  }
  return valorAnterior;
}, valorInicial);
console.log(maiorString);
