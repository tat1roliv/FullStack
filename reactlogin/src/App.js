import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid red;
  width:300px;
  height: 25px;
  padding: 10px;
`;
 
function App() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleEmailInput = (e) => {
    setEmail(e.target.value); 
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value); 
  }
  
  const handleButton = () => {
    alert(email+' - '+password);
  }

  return (
    <>
      <Input placeholder="Digite o email @" type="email" value={email} onChange={handleEmailInput}/>

      <Input placeholder="Digite a senha" type="password" value={password} onChange={handlePasswordInput}/>

      <button onClick={handleButton}>OK</button>
    </>
  );
}

export default App;
