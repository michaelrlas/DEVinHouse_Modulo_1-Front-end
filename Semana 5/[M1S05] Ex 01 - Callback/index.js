// Crie um site com um botão que espera receber um evento de click e uma função callback
// que informe ao usuário que o botão foi clicado.

const botao1 = document.getElementById('botao');
botao1.addEventListener('click', voceClicou);

function voceClicou() {
  alert('A curiosidade matou o gato');
}
