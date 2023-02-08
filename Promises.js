import React from 'react';
import './App.css'
export function App(props) {
var message = "Jello"

function clickt(){
let p = new Promise((resolve, reject) =>{
  var a = 1+1
  if (a === 2){
    resolve("Success")
  }
  else reject("Failed")
  })

  p.then((mes)=>{
    console.log(mes)
    document.getElementById("message").innerHTML=mes;
  }).catch((mes)=>{
    console.log(mes)
    document.getElementById("message").innerHTML=mes;
  });
}


return (
  
    <div className='App'>
    <h1 id="message">{message}</h1>
    </div>
);
}
// Log to console