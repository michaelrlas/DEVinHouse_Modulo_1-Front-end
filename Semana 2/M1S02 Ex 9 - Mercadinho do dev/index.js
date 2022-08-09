var final = false;
var produto = '';
var hortifruti = 0,
  laticinios = 0,
  carnes = 0,
  peixes = 0,
  aves = 0;
do {
  produto = parseFloat(
    window.prompt(
      'Digite o número do produto escolhido: \n(1) Hortifruti \n(2) Laticínios \n(3) Carnes \n(4) Peixes \n(5) Aves \n(6) Fechar pedido '
    )
  );
  if (
    produto != 1 &&
    produto != 2 &&
    produto != 3 &&
    produto != 4 &&
    produto != 5 &&
    produto != 6
  ) {
    window.alert('Por favor escolha as opções entre 1 e 6');
    produto = '';
  } else {
    switch (produto) {
      case 1:
        var hortifruti = parseFloat(window.prompt('informe a quantidade'));
        break;
      case 2:
        var laticinios = parseFloat(window.prompt('informe a quantidade'));
        break;
      case 3:
        var carnes = parseFloat(window.prompt('informe a quantidade'));
        break;
      case 4:
        var peixes = parseFloat(window.prompt('informe a quantidade'));
        break;
      case 5:
        var aves = parseFloat(window.prompt('informe a quantidade'));
        break;
      case 6:
        final = true;
        break;
    }
  }
} while (final == false);

if (
  hortifruti > laticinios &&
  hortifruti > carnes &&
  hortifruti > peixes &&
  hortifruti > aves
) {
  document.write('Seu maior pedido foi hortifruti com ', hortifruti);
} else if (laticinios > carnes && laticinios > peixes && laticinios > aves) {
  document.write('Seu maior pedido foi laticínios com ', laticinios);
} else if (carnes > peixes && carnes > aves) {
  document.write('Seu maior pedido foi carnes com ', carnes);
} else if (peixes > aves) {
  document.write('Seu maior pedido foi peixes com ', peixes);
} else {
  document.write('Seu maior pedido foi aves com ', aves);
}
