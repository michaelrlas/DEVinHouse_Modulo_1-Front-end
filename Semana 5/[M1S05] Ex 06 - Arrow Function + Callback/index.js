// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10
// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

// let numeroTabuada = 5;

// const tabuada1 = () => {
//   for (var count = 1; count <= 10; count++)
//     console.log(numeroTabuada + 'x' + count + ' = ' + numeroTabuada * count);
// };

// // function tabuada() {
// //   for (var count = 1; count <= 10; count++)
// //     console.log('3 x ' + count + ' = ' + 3 * count);
// // }
// console.log(tabuada1(numeroTabuada));

var numParaGerarTabuada = 3;

const imprimirTabuada = numero => {
  return numParaGerarTabuada * numero;
};

const gerarTabuada = (num, callBack) => {
  for (let i = 0; i <= 10; i++) {
    const element = callBack([i]);
    console.log(`${i} x ${num} = ${element}`);
  }
};

gerarTabuada(numParaGerarTabuada, imprimirTabuada);
