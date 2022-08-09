var peso = parseFloat(window.prompt('Digite seu peso'));
var altura = parseFloat(window.prompt('Digite sua altura'));
var imc = peso / altura ** 2;

if (imc >= 25) {
  alert('Você está acima do peso, procure um médico');
} else if (imc > 18.5 && imc < 24.9) {
  alert('PARABÉNS!! Você está no peso ideal');
} else {
  alert('Você está abaixo do peso, procure um médico.');
}
