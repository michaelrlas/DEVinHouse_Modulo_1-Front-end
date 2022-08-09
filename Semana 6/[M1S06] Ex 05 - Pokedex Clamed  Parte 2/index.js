// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão
// que irá pegar o nome do pokemon e ao apertar no botão pesquisar irá fazer a mesma
// requisição construída anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista
// com todas as habilidades do pokémon (observe a propriedade abilities).

var botao = document.getElementById('pesquisar');
botao.addEventListener('click', () => {
  let pokemon = document.querySelector('.input__search').value;

  const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest

  //Segundo passo - definir o método HTTP (GET) e para onde a chamada (url) irá ser feita (https://pokeapi.co/api/v2/pokemon/charizard)
  oReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemon);
  oReq.onload = () => {
    //Terceiro passo - o que será feito quando a chamada der sucesso
    //Para pegar o resutado vindo da api

    let image = document.querySelector('.pokemonimage');
    console.log('Nome:' + oReq.response.name);
    console.log('Altura: ' + oReq.response.height);
    console.log('Peso: ' + oReq.response.weight);
    image.src = oReq.response.sprites.front_default;
  };
  oReq.responseType = 'json'; //Tipo de retorno - no caso em formato json

  oReq.send(); //Ultimo passo - enviar a requisição
});
