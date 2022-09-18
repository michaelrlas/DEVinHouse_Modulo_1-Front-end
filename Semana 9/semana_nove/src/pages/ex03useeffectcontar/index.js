// [M1S09] Ex 03 - Utilizar useState para realizar contagem de cliques

import React, { useEffect, useState } from 'react';

export default function ClickCounter() {
  const [change, setChange] = useState(0);

  useEffect(() => {
    console.log({ change });
  }, [change]);

  return <button onClick={() => setChange(change + 1)}>{change}</button>;
}
