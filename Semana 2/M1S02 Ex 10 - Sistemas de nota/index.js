var i = 1,
  aluno = '',
  soma = 0,
  result = 0,
  notas = [];
aluno = window.prompt('Digite o nome do aluno:');
while (i < 5) {
  notas.push(window.prompt('Valor da ' + i + 'ª nota do aluno.'));
  i++;
}
i = 0;

for (i = 0; i < notas.length; i++) {
  soma += Number(notas[i]);
}

result = soma / 4;

if (result >= 7) {
  document.write(
    'O aluno ' + aluno + ' ficou acima da média, com o resultado = ' + result
  );
} else {
  document.write(
    'O aluno ' + aluno + ' ficou abaixo da média, com o resultado = ' + result
  );
}
