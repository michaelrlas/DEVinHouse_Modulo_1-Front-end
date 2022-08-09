// Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string
// junte para a string abaixo.
// "Eu, nome sobrenome, possuo idade anos, e nasci em calculo do ano em que estamos - sua idade."

var nome = prompt('Digite seu nome');
var sobrenome = prompt('Digite seu sobrenome');
let idade = parseFloat(window.prompt('Digite sua idade'));
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

document.write(
  `Eu ${nome} ${sobrenome}, possuo ${idade} e nasci em ${anoAtual - idade}`
);

console.log(
  "'Eu, '" +
    nome +
    ' ' +
    sobrenome +
    ' possuo ' +
    idade +
    ' anos, e nasci em ' +
    (anoAtual - idade)
);
