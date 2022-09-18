// [M1S09] Ex 04 - A partir de um hook, modifique o título da página HTML ao clicar
// em um botão específico

import React, { useEffect, useState } from 'react';

export default function ChangeTitle() {
  const [title, setTitle] = useState('');

  const [button, setButton] = useState();

  useEffect(() => {
    //   console.log({ title });
    //   document.title = title;
    // }, [title]);

    document.title = title;
    if (title === 'Título 1') {
      setButton('Título 1');
    } else if (title === 'Título 2') {
      setButton('Título 2');
    }
  }, [title]);

  return (
    <div>
      <span>Botão clicado {button}</span>
      <div>
        <button onClick={() => setTitle('Título 1')}>Título 1</button>
        <button onClick={() => setTitle('Título 2')}>Título 2</button>
      </div>
    </div>
  );
  // <button onClick={() => setChange(change + 1)}>{change}</button>;
}
