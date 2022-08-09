// const estados = [
//   'Sao Paulo',
//   'Rio de Janeiro',
//   'Amazonas',
//   'Pernambuco',
//   'Santa Catarina',
//   'Rio Grande do Norte',
//   'Sergipe',
// ];

// var longest = estados.reduce(function (a, b) {
//   return a.length > b.length ? a : b;
// });
// console.log(longest);

// function maiorString(array = []) {
//   var longest = array.reduce(function (a, b) {
//     return a.length > b.length ? a : b;
//   });
//   return longest;
// }
// console.log(longest)

// function maiorStringDoArray(array) {
//   let maiorString = '';
//   for (let item of array) {
//     if (item.length > maiorString.length) {
//       maiorString = item;
//     }
//   }
//   return maiorString;
// }
// console.log(maiorStringDoArray(estados));

// estados.reverse();
// console.log(estados);

// const estados = [
//   'Sao Paulo',
//   'Rio de Janeiro',
//   'Amazonas',
//   'Pernambuco',
//   'Santa Catarina',
//   'Rio Grande do Norte',
//   'Sergipe',
// ];

// function inverteOrdem(array = []) {
//   return array.reverse();
// }

// console.log(inverteOrdem(estados));

// const somaCom100 = function (numero) {
//   return numero + 100;
// };

// const resultadoDoMap = [10, 20, 30].map(somaCom100);
// console.log(resultadoDoMap);

// const botao1 = document.getElementById('botao');
// botao1.addEventListener('click', voceClicou);

// function voceClicou() {
//   alert('A curiosidade matou o gato');
// }

// function verificarPar(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// function verificarImpar(num) {
//   if (num % 2 === 1) {
//     return true;
//   }
//   return false;
// }

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// function filtrarNumeros(array, callback) {
//   const numerosFiltrados = array.filter(callback);
//   return numerosFiltrados;
// }

// console.log(filtrarNumeros(array1, verificarPar));

// const array = [1, 2, 3, 4];
// const valorInicial = 0;
// const soma = array.reduce(
//   (valorAnterior, valorAtual) => valorAnterior + valorAtual,
//   valorInicial
// );

// const media = (soma, array) => soma / array.length;

// const media2 = array => {
//   const soma = array.reduce(
//     (valorAnterior, valorAtual) => valorAnterior + valorAtual,
//     valorInicial
//   );
//   return soma / array.length;
// };
// console.log(media2(soma, array));

// Crie uma arrow function que recebe um array de números
// e retorne um array contendo apenas
// números positivos

// const array = [-3, -2, -1, 0, 1, 2, 3, 4];
// const retornaPositivo = array => array.filter(array => array > 0);
// console.log(retornaPositivo(array));

// Utilize o if ternário para construir uma função
// que recebe o número de dias e
// retorna se o número pertence a primeira
// ou a segunda quinzena

// const retornaQuinzena = diaDoMes =>
//   diaDoMes >= 1 && diaDoMes <= 15 ? 'Primeira Quinzena' : 'Segunda Quinzena';

// console.log(retornaQuinzena(5));

// Crie uma arrow function que receba um array
// e localize o número de maior valor

// let maiorNumero = array => Math.max(...array);
// console.log(maiorNumero([1, 2, 3, 4, 67, 89]));

// let array = [10, 20, 30, 40, 50];
// const numeroMaiorDeUmaArray = (array = []) => {
//   var maior = 0;
//   for (const item of array) {
//     if (item > maior) {
//       maior = item;
//     }
//   }
//   return maior;
// };

// console.log(numeroMaiorDeUmaArray(array));

// Crie uma arrow function que receba 2 arrays
// e retorne um array contendo os dois

// let arrayPrimeira = [1, 2, 3, 4, 5],
//   arraySegunda = [6, 7, 8, 9, 10];

// const somaAsArrays = (array1, array2) => {
//   return array1.concat(array2);
// };

// console.log(somaAsArrays(arrayPrimeira, arraySegunda));

// console.log(sortedArray);

// ---> ordenar array <-----
// let array = [9, 80, 10, 20, 5, 70, -15];
// array.sort((a, b) => a - b);
// console.log(array); //[-15, 5, 9, 10, 20, 70, 80]

// ---> ordenar array <-----
// let array = [19, 50, 2, 1, 99, -20];
// const ordenaArray = (array = []) => {
//   return array.sort((a, b) => a - b);
// };
// console.log(ordenaArray(array)); //[-20, 1, 2, 19, 50, 99]

// Crie uma arrow function que receba um número, calcule sua raiz quadrada e
// retorne um número inteiro positivo como resultado

// let calaculaRaizQuadrada = numero => {
//   if (numero < 0) {
//     return 'Não é um número válido';
//   } else {
//     let raiz = Math.sqrt(numero);
//     return Math.trunc(raiz);
//   }
// };

// console.log(calaculaRaizQuadrada(0));
// console.log(calaculaRaizQuadrada(-3));

// Crie uma arrow function que receba uma string e devolva um objeto com as informações:
// quantos caracteres a string possui qual seu primeiro caracter e qual seu último caracte

const avaliarString = texto => {
  const objeto = {
    tamanho: texto.length,
    primeiraLetra: texto[0],
    ultimaLetra: texto[texto.length - 1],
  };
  console.log(`A string possui ${objeto.tamanho} caracteres`);
  console.log(`A primeira letra é ${objeto.primeiraLetra}`);
  console.log(`A última letra é ${objeto.ultimaLetra}`);
};

avaliarString('Testando');
