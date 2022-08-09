// Crie um site com os seguintes requisitos:
// um campo de texto (input) onde o usuário irá digitar uma mensagem
// três botões:
// um botão “adicionar”, que no momento do clique insira a mensagem na tela
// um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
// opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário
// solicitando a inserção de algum texto.
// um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique
// busque a mensagem no localStorage e exiba na tela
// opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela:
// “não há ítens salvos”

function entradaDeTexto() {
  var mostraTexto = document.getElementById('adiciona').value;
  var campoMostra = document.getElementById('result');
  campoMostra.textContent = 'esse é o texto digitado: ' + mostraTexto;
}
imprimenatela.addEventListener('click', entradaDeTexto, false);

const botao2 = document.getElementById('salvalocal');
botao2.addEventListener('click', function () {
  const adiciona = document.getElementById('adiciona');
  localStorage.setItem('mensagem', JSON.stringify(adiciona.value));
});

function mostrar() {
  var mostraTexto = document.getElementById('adiciona');
  const msg2 = document.getElementById('msg2');
  const texto = localStorage.getItem('mensagem');
  msg2.innerHTML = JSON.parse(texto);
}
mostralocal.addEventListener('click', mostrar, false);
