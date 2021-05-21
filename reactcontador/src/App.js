import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [ contagem, setContagem ] = useState(0);

  //useeffect param(funcao anom, array);
  //useEffect(() => {}, []);

  useEffect(() => {
    document.title = "Contagem: "+contagem;
  }, [contagem]);//se nao for passado parametro, executa apenas uma vez

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
