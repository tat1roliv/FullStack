import React, { useState } from 'react';
import styled from 'styled-components';


function App() {

const Title = styled.h1``;

const Input = styled.input`
  width:300px;
  height: 30px;
  padding:10px;
  border: 1px solid #000;
`;

const [ valorconta, setValorConta ] = useState('');
const [ valorgorjeta, setValorGorjeta] = useState('');

const handleValorConta = (e) =>{
  setValorConta(e.target.value);
}

const handleValorGorjeta = (e) =>{
  setValorGorjeta(e.target.value);
}

  return (
  <>

    <Title>Calculadora de Gorjeta (React)</Title>

    <p>Informe o valor total da conta: </p>
    <Input type="number" value={valorconta} onChange={handleValorConta}/>
    <hr/>

    <p>Informe o valor do desconto: </p>
    <Input type="number" value={valorgorjeta} onChange={handleValorGorjeta}/>
    <hr/>

    {valorconta.length > 0 && valorgorjeta.length > 0 &&
                
                <div>
                    <p>Sub-total: R$ {parseFloat(valorconta)}</p>
                    <p>Gorjeta ({parseFloat(valorgorjeta)}%): {parseFloat(valorconta) * (parseFloat(valorgorjeta) / 100)}</p>
                    <p>Total: R$ {parseFloat(valorconta) + (parseFloat(valorconta) * (parseFloat(valorgorjeta) / 100))}</p>
                </div>
      }


  </>
  );
}

export default App;
