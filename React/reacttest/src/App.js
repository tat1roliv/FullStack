import React from 'react';
import './App.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.user.url} alt={props.user.name}/>
      <br/>
      <span>{props.user.name}</span>
    </div>
  );
}

function App(){
  let user = {
    url:"https://www.google.com.br/google.jpg",
    name:"tat1"
  };

return <>
    <Avatar user={user}/>
  </>;
}
export default App;