const botao1 = document.getElementById('botao1');

botao1.addEventListener('click', function () {
  if (entrada.value != '') {
    const entrada = document.getElementById('entrada');
    const listaLivros = document.getElementById('listalivros');
    var novoItem = document.createElement('li');
    listaLivros.appendChild(novoItem);
    novoItem.innerHTML += entrada.value;
    entrada.value = '';
  } else {
    window.alert('Digite o nome que deseja adicionar a lista');
  }
});
