import { useContext } from "react";
import React from 'react';
import dataContext from "./contexts/dataContext";

export function Login() {
  const {data,setData}=useContext(dataContext)  
  return (
    <div>
        <label htmlFor='name'></label>
        <input type='text' id='name'></input>
        <input type='submit' onClick={()=>{
            setData(document.getElementById('name').value)
            console.log(data);
        }}></input>
    </div>
  )
}

