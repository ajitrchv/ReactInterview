import {React, useContext} from 'react'
import dataContext from './contexts/dataContext'
import './App.css'
export function Name() {
  const {data, setData}=useContext(dataContext)
  
  return (
    <div>
        {data?<h1>The name is </h1>:<h1></h1>}
        
    </div>
  )
}

