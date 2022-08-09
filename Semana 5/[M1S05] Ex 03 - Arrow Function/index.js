// Crie uma arrow function que recebe um array de números e calcula a média deles

const array = [1, 2, 3, 4, 6];
const valorInicial = 0;

const media2 = array => {
  const soma = array.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual,
    valorInicial
  );
  return soma / array.length;
};
console.log(media2(array));
