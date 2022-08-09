let array = ['Mika', 'Babajubi', 'Mikaomau', 'Michael'];
document.write(array);
let button = document.getElementById('button');

button.addEventListener('click', function () {
  let valor = document.getElementById('valor').value;
  excluirItem(valor);
});

function excluirItem(item) {
  let indice = array.indexOf(item);
  array.splice(indice, 1);
  console.log(array);
}
