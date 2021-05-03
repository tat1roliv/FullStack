import React, { useState } from 'react';
import styled from 'styled-components';

function App() {

  const [ contagem, setContagem ] = useState(0);

  const botaoAction = () => {
    setContagem(contagem + 1);
  }

  return (
    <>
      <div>{contagem} and counting...</div>
      <button onClick={botaoAction}>Click for add one</button>
    </>
  );
}

export default App;
