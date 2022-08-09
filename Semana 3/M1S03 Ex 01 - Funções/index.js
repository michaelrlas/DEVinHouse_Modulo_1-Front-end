let n = 1;
let parOuImpar = function (n) {
  if (n % 2 == 0) {
    return 'par';
  } else if (!(n % 2 != 1)) {
    return 'ímpar';
  } else {
    return 'undefined';
  }
};

console.log(parOuImpar(n));
