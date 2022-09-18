// Mostrar no console o valor digitado no input por meio do recurso useEffect

import React, { useEffect, useState } from 'react';

export default function ChangeConsole() {
  const [change, setChange] = useState(0);

  useEffect(() => {
    console.log({ change });
  }, [change]);

  return (
    <input
      placeholder="Digite um valor"
      onChange={e => setChange(e.target.value)}
    ></input>
  );
}
