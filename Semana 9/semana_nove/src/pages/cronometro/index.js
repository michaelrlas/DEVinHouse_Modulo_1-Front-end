import { useState, useRef } from 'react';

export default function Cronometro() {
  const [timer, setTimer] = useState(0);

  function iniciarContagem() {
    const myInterval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  }
  function paraContagem() {
    clearInterval();
  }

  return (
    <div
      style={{
        display: 'block',
        width: '240px',
        margin: '0 auto',
        textAlign: 'center',
        transform: 'scale(2) translateY(50%)',
      }}
    >
      <h2>{timer}</h2>
      <button onClick={iniciarContagem}>Iniciar</button>
      <button onClick={paraContagem}>Parar</button>
    </div>
  );
}
