import { useState } from 'react';
import { MenuItem } from './style';

export default function Menu() {
  const [item, setItem] = useState();
  function Clicar(pagina) {
    console.log(pagina);

    setItem(pagina);
  }

  return (
    <div>
      <ul>
        <MenuItem
          active={item === 'home' ? '1' : '0'}
          onClick={e => Clicar('home')}
        >
          Home
        </MenuItem>
        <MenuItem
          active={item === 'produtos' ? '1' : '0'}
          onClick={e => Clicar('produtos')}
        >
          produtos
        </MenuItem>
        <MenuItem
          active={item === 'carrinhos' ? '1' : '0'}
          onClick={e => Clicar('carrinhos')}
        >
          carrinhos
        </MenuItem>
        <MenuItem
          active={item === 'conta' ? '1' : '0'}
          onClick={e => Clicar('conta')}
        >
          conta
        </MenuItem>
      </ul>
    </div>
  );
}
