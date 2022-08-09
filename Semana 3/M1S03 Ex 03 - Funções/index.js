var listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var listaDeLetras = ['oi', 'turu', 'bem'];
function ContadorParImpar(lista = []) {
  var listaTamanho = lista.length;
  var contadorPar = 0;
  var contadorImpar = 0;
  var invalido;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
      contadorPar++;
    } else if (lista[i] % 2 == 1) {
      contadorImpar++;
    } else {
      invalido++;
    }
  }

  return [contadorPar, contadorImpar, listaTamanho];
}

var par = ContadorParImpar(listaDeNumeros)[0];
var impar = ContadorParImpar(listaDeNumeros)[1];
var listaQtt = ContadorParImpar(listaDeNumeros)[2];

console.log(
  'A quantidade informada foi',
  listaQtt,
  'a de valores pares foi ',
  par,
  ', e a de valores ímpares foi ',
  impar
);
