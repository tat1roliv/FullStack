import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid red;
  width:300px;
  height: 25px;
  padding: 10px;

`;
 
function App() {

  const [ texto, setTexto ] = useState('tati1')
  return (
    <>
      <Input type="text" value={texto}/>
    </>
  );
}

export default App;
