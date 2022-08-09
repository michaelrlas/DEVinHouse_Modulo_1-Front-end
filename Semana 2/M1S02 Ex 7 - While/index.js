var contador = 0,
  resposta,
  qttPessoas = 0;

while (contador < 4) {
  resposta = window.prompt('Qual a sua avaliação da série Stranger Things?');
  switch (resposta) {
    case 'ruim':
      qttPessoas++;
      break;
    case 'bom':
      break;
    case 'excelente':
      break;
  }
  contador++;
}
document.write(qttPessoas, ' entrevistados classificaram a série como ruim');
