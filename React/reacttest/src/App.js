import React, { useReducer } from 'react';

function Avatar(props){
  return <img src={props.url} alt={props.name}></img>
  <br>
  <span>{props.name}</span>
}

function App() {
  let user = {
    url="https://www.google.com.br/google.jpg",
    name="boni";
  };

  return <> 
  <Avatar  url={user.url} name={user.name}/>
  </>;
}

export default App;


</br>

/*class App extends React.Component{
  render(){
    return <h1>Testing</h1>;
  }
}

function App(){
  return <h1>testinggg</h1>
}

let App = () => {
  return <h1>ttttesting</h1>;
};



function App(){
  let usuario = {
    nome: 'boni',
    sobrenome:'boni2'
  };

  return <>
  <div>meu nome é {formatarNome(usuario)}</div>
  </>;
}
export default App;



function App(){
  let imagem = "https://www.google.com.br/google.jpg";

  return <>
  <img src={imagem}/>
  </>;
}
export default App;*/