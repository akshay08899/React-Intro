import React from 'react';
import './App.css';
import Apps from './New';
import { Test } from './Test' ;

export function App() {
  let name = 'Akshay Pratap Singh'; 
  let age = 19;    
  let loginstatus = true;                                
  return (
    <div>
        <h1 className = "heading1">Welcome to React App {name}</h1>
        <h2>{age >= 18 ? "You can Vote" : "You can not vote" }</h2>
        <Test props={loginstatus} />
        {/* {
          loginstatus === true ? <ShowMessage /> : <ShowError />
        } */}
        <Apps/>
    </div>
    
    
    
      );
}

function ShowMessage(){
  return (
    <h3> You are logged in Successfully!!!</h3>
   
  );
}

function ShowError() {
  return (
  <h3>Error on logged in!!!</h3> 
  );
}

 export default App;