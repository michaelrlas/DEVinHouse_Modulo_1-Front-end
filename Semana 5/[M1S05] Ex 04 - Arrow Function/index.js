// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

const array = [-3, -2, -1, 0, 1, 2, 3, 4];
const retornaPositivo = array => array.filter(array => array > 0);
console.log(retornaPositivo(array));
