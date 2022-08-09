//acessar elementos
let nomeUsuario = document.getElementById('apresentanome');
let imagemUsuario = document.getElementById('apresntaimagem');
let descricaoUsuario = document.getElementById('apresentadescricao');

//imprime elementos
export default function receberDados(nome, imagem, descricao) {
  if (imagem) {
    imagemUsuario.setAttribute('src', imagem);
  }
  if (nome) {
    nomeUsuario.innerHTML = nome;
  }
  if (descricao) {
    descricaoUsuario.innerHTML = descricao;
  }
}
