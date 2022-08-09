import receberDados from './index.js';

//acessar elementos html
var botao = document.getElementById('botao');
var nomeUsuario = document.getElementById('nome');
var imagemUsuario = document.getElementById('imagem');
var descricaoUsuario = document.getElementById('descricao');
var formulario = document.getElementById('form');

botao.addEventListener('click', event => {
  event.preventDefault();
  //colocar dados acessados em variaveis
  var valorDoNome = nomeUsuario.value;
  var valorDaImagem = imagemUsuario.value;
  var valorDaDescricao = descricaoUsuario.value;
  receberDados(valorDoNome, valorDaImagem, valorDaDescricao);
  //limpar form jeito 1
  // nome.value = '';
  // descricao.value = '';
  // imagem.value = '';

  //limpar form 2

  formulario.reset();
});
