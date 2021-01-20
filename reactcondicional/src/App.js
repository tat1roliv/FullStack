import React, { useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
width: 20em;
height: 1em;
font-size: 16px;
padding: 10px;
border:1px solid black;
`;

function App() {
  
  const [ texto, setTexto ] = useState('');
  const handleInput = (e) => {
    setTexto(e.target.value);
  };
  
  return (
    <>
      <Input placeholder="digite: " type="texto" value={texto} onChange={handleInput}/>
      {texto.length > 0 &&
      <p>{texto.length} caractere {texto.length != 1 ? 's' : '' }</p> 
      }
          

    </>
  );
}

export default App;
