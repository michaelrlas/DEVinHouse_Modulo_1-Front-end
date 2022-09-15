// Inicie um componente com Hooks e adicione uma lista inicial com 5 frutas e renderize estes elementos na tela.

import React, { useState } from 'react';

export default function ListaLivros() {
  const lista = [
    {
      id: 1,
      name: 'Senhor dos Anéis',
    },
    {
      id: 2,
      name: 'Duna',
    },
    {
      id: 3,
      name: 'Musashi',
    },
  ];

  const [livros, setLivros] = useState(lista);

  return (
    <div>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}> {livro.name} </li>
        ))}
      </ul>
    </div>
  );
}
