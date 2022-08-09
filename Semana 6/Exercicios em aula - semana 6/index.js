// Capture o nome sobrenome idade, mostre na tela e calcule o ano de nascimento
// let nome = window.prompt('Digite seu nome');
// let sobrenome = window.prompt('Digite seu sobreome');
// let idade = parseFloat(window.prompt('Digite sua idade'));
// let dataAtual = new Date();
// let anoAtual = dataAtual.getFullYear();
// console.log(anoAtual);

// document.write(
//   `Eu ${nome} ${sobrenome}, possuo ${idade} e nasci em ${anoAtual - idade}`
// );

// spread operator
//sem operador spread
// function test(param1, ...otherParams) {
//   return `Oi ${param1}, sou eu ${otherParams}`;
// }

// console.log(test('Rayane', 'Michael', ['cachorro', 'gato']));

// function somaNumeros(...valores) {
//   let somatorio = 0;
//   valores.map(valor => {
//     somatorio += valor;
//   });
//   return somatorio;
// }

// console.log(somaNumeros(12, 34, 56, 42, 20));

// let array = [1, 32, 45, 2, 765, 311, 89];

// // console.log(Math.max(...array));

// let filme = 'codigo da vinci';

// console.log(filme);
// console.log(...filme);

// // adicionar em um array
// let numero = [];
// array.forEach(item => {
//   //adicionar array com spread
//   numero.push(item);
// });

// numero.push(...array);

// console.log(array);
// console.log(...array);

// const gato = { patas: 4, faz: 'miau' };
// const cachorro = { patas: 4, faz: 'auau' };
// const gato2 = { ...gato, pelagem: 'branca' };

// // const animais = [];
// // animais.push(cachorro, gato2);
// // console.log(...animais);

// const animais = [{ ...gato2 }, { ...cachorro }];
// console.log(animais);

// //set timeout função assincrona
// call1 = () => {
//   console.log('Olá');
//   setTimeout(() => {
//     console.log('Tudo bem');
//   }, 5000);
//   return console.log('Sim estou bem');
// };

// call1();

// console.log('Fora da promise');

// const promessa = new Promise((resolve, reject) => {
//   let deuCerto = true;
//   if (deuCerto) {
//     resolve('Entrei no resolve');
//   } else {
//     reject('Entrei no reject');
//   }
// });
// console.log(promessa);

// promessa
//   .then(retorno => {
//     console.log(retorno);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const promessa = new Promise((resolve, reject) => {
//   let valor = 10;
//   if (valor > 20) {
//     resolve('sou maior que 20');
//   } else {
//     reject();
//   }
// });
// console.log(promessa);

// promessa
//   .then(retorno => {
//     console.log(retorno);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const p = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve(mostraOi());
//     }, 5000);
//   } catch (e) {
//     reject(e);
//   }
// });
// console.log(p);
// function mostraOi() {
//   console.log('amigo estou aquiiiiiiiiiii');
// }
// p.then(resolve => {
//   console.log('amigo estou aqui');
// }).catch(err => {
//   console.error(err);
// });

//api utilizada no correio
// const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest

// oReq.onload = () => {
//   console.log(oReq.response);
// };

// oReq.open('GET', 'https://viacep.com.br/ws/88117330/json/');
// oReq.responseType = 'json';

// oReq.send();

// let realizaPesquisa, meuCEP, btn;

// btn = document.querySelector('#btnEnviaCep');
// btn.addEventListener('click', recebeInfoDeCep);

fetch(`https://viacep.com.br/ws/01001000/json/`)
  .then(response => {
    return response.json();
  })
  .then(cep => {
    console.log(cep);
  });
