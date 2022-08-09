// Crie uma página html para buscar o endereço através do cep contendo:
// 1 input para receber o CEP
// 1 button para buscar o endereço
// Crie uma função assíncrona que deve realizar o fetch do endereço do cep
// Utilize este endpoint: https://viacep.com.br/ws/01001000/json/
// Substitua o 01001000 pelo cep digitado no input
// Faça a chamada utilizando Fetch e aguarde o resultado
// Adicione no button o evento de click para chamar a função criada.
// Caso a api retorne sucesso deve ser adicionado um elemento <p> com o endereço formatado
// ex: logradouro, complemento - bairro - localidade/uf

function procuraCep() {
  const options = {
    method: 'GET',
  };

  let pegaCep = document.querySelector('.input__search').value;

  fetch(`https://viacep.com.br/ws/${pegaCep}/json/`, options)
    .then(response => {
      return response.json();
    })
    .then(retornaCep => {
      console.log(retornaCep);
      let logradouro = document.querySelector('#logradouro');
      let complemento = document.querySelector('#complemento');
      let bairro = document.querySelector('#bairro');
      let localidade = document.querySelector('#localidade');
      let uf = document.querySelector('#uf');

      logradouro.innerHTML = retornaCep.logradouro;
      complemento.innerHTML = retornaCep.complemento;
      bairro.innerHTML = retornaCep.bairro;
      localidade.innerHTML = retornaCep.localidade;
      uf.innerHTML = retornaCep.uf;
    })
    .catch(err => {
      console.error(err);
    });
}
