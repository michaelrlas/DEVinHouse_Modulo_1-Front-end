// Construa uma função que irá verificar se um valor passado pelo parâmetro é par.
// Construa as validações dentro de uma promise para que caso seja uma par retorne
// para o then a mensagem "Número validado é par”.
// Caso o valor seja impar, retorne para o catch a mensagem
// “Error: número informado é impar”.

const promessa = new Promise((resolve, reject) => {
  let valor = 33;
  if (valor % 2 === 0) {
    resolve('Número validado é par');
  } else {
    reject('Error: número informado é impar');
  }
});
console.log(promessa);

promessa
  .then(retorno => {
    console.log(retorno);
  })
  .catch(err => {
    console.log(err);
  });
