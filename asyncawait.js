import React from 'react';
import './App.css';
export function App() {

  function req(loc){
    return new Promise((resolve, reject)=>{
      console.log("Making request to "+loc)
      if(loc === 'google'){
        resolve("Request granted")
      }
      else reject("Only google")
    })
  }

  function extra(res){
    return new Promise((resolve, reject) => {
      resolve("Extra information regarding "+res)
    })
  }

async function dotask(loc){
  try{
  var res = await req(loc)
  console.log("response sent")
  var ex = await extra(res)
  console.log(ex)}
  catch(err){
    console.log(err+" --- error masg")
  }
}
dotask("googl")


  return (
    <div className='App'>
      <h1>App</h1>
      <p>deff</p>
    </div>
  )
}
