import React, { useState } from 'react';
import styled from 'styled-components';

function App() {

  const [ contagem, setContagem ] = useState(0);

  const botaoAction = () => {
    setContagem(contagem + 1);
  }

  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique para aumentar</button>
    </>
  );
}

export default App;
