const textos = ['texto 1', 'texto 2', 'texto 3', 'texto 4', 'texto 5'];

function adicionaTextos(listaDeTextos) {
  const divTextos = document.getElementById('div-texto');
  for (texto of listaDeTextos) {
    const div = document.createElement('div');
    div.innerText = texto;
    divTextos.appendChild(div);
  }
}
adicionaTextos(textos);
