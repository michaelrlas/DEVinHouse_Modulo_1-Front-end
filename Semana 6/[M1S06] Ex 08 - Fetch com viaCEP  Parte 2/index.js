// Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir
// modal de alerta (alert) informando que o campo precisa ser preenchido
// Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido
// modal de alerta (alert) informando que o campo foi preenchido com um cep inválido
// Em ambos os casos à cima não deve ser realizada a consulta na api de cep

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
      if (pegaCep == '') {
        alert('Campo de pesquisa em branco, por favor digite um cep');
      } else if (pegaCep.length < 8 || pegaCep.length > 8) {
        alert(
          'Você digitou um cep inválido. Verifique se o cep procurado possui 8 dígitos'
        );
      }
      console.error(err);
    });
}
