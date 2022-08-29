import PropTypes from 'prop-types';

// function Soma({ num1, num2 }) {
//   const somaValores = parseFloat(num1) + parseFloat(num2);
//   return <p>A soma valores é {somaValores}</p>;
// }

// export default Soma;

export default function Soma({ num1, num2 }) {
  const resultado = num1 + num2;
  return <p> a soma dos números é {resultado}</p>;
}

Soma.prototype = {
  num1: PropTypes.number,
  num2: PropTypes.number,
};

Soma.defaultProps = {
  num1: 0,
  num2: 0,
};
