import React, { useState } from 'react'
import './App.css';

export function App() {
  
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const[mail, setMail]  = useState('');
  const[mailErr, setMailErr] =useState(null);

  const[pass, setPass]  = useState('');
  const[passErr, setPassErr] =useState(null);


  const isMailValid = function(mail){
    return(pattern.test(mail))
  }

  const isPasswordValid = function(pass){
    if(
        (pass.length>=8)&&
        (pass.includes('@')||
        pass.includes('#')||
        pass.includes('$')||
        pass.includes('&')||
        pass.includes('.'))
    )
    return true;
    else return false;
  }


  const mailHandler = event => {
    if(!isMailValid(event.target.value)){
      setMailErr('Mail Invalid');
    }
    else setMailErr(null)
    setMail(event.target.value)
  }

  const passHandler = event => {
    if(!isPasswordValid(event.target.value)){
      setPassErr('Password Invalid');
    }
    else setPassErr(null)
    setPass(event.target.value)
  }


  return (
    <div className='App'>
      <label id='email'>Email</label>
      <input type='email' id='email' onChange={mailHandler}></input>
      {
        mailErr ? <p className='error'>{mailErr}</p> : <p></p>
      }

      <label id='password'>password</label>
      <input type='password' id='password' onChange={passHandler}></input>
      {passErr?<p className='error'>{passErr}</p>:<p></p>}
      {
        (passErr || mailErr) ? <input type='submit' disabled={true}></input> : <input type='submit'></input>
      }
      
    </div>
  )
}

