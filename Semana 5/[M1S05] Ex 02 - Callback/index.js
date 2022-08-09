// Crie 2 funções, ambas recebem um número e retorna true ou false:
// a primeira  verifica se é par;
// a segunda verifica se é ímpar.
// Em seguida crie uma função que recebe como parâmetros: um array de números
// e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um
// array de números filtrados (independente de qual seja a função callback).
// Dica: o filtro poderá ser de números ímpares ou pares.

function verificarPar(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function verificarImpar(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function filtrarNumeros(array, callback) {
  const numerosFiltrados = array.filter(callback);
  return numerosFiltrados;
}

console.log(filtrarNumeros(array1, verificarPar));
