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
  
  const [ email, setEmail ] = useState('');
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  
  return (
    <>
      <Input placeholder="digite: " type="email" value={email} onChange={handleInput}/>
      {email.length > 0 &&
      <p>{email.length} caractere{email.length != 1 ? 's' : '' }</p> //condicional p caractere(s) =! -> s, senao -> ''
      }
          
    </>
  );
}

export default App;
