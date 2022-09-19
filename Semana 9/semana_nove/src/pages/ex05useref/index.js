// [M1S09] Ex 05 - Com o hook useRef, crie um código que simule o evento "focus" do input

import React, { useEffect, useRef } from 'react';

export default function ClickFocus() {
  const inputElement = useRef();

  function handleClick() {
    inputElement.current.focus();
  }

  useEffect(() => {}, []);

  return (
    <div>
      <br />
      <input type="text" ref={inputElement}></input>
      <div>
        <br />
        <button onClick={handleClick}>Focar no Input</button>
      </div>
    </div>
  );
}
