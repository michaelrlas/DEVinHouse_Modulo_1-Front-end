// Utilizando a api PokéAPI e fazendo uma requisição get com XMLHttpRequest, imprima em um
// console.log() o nome, a altura, o peso e adicione na tela uma imagem (a sua escolha)
// desse pokémon. Todas as informações precisam vir da api inclusive a imagem.
// Dicas: as informações pedidas estão dentro do json que é retornado da api, observe
// as propriedades: height, weight, sprites e name.
// Para o teste no final da url é necessário usar um nome de um pokémon.
// Ex: pikachu, ditto, charmander…

const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest

//Segundo passo - definir o método HTTP (GET) e para onde a chamada (url) irá ser feita (https://pokeapi.co/api/v2/pokemon/charizard)
oReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/charizard');
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
