import React, { useState } from 'react'
import './App.css'
import dataContext from './contexts/dataContext'
import { Login } from './login'
import { Name } from './name'

export function App() {
  const [data, setData] = useState('')
  return (
    <div className='App'>
      <dataContext.Provider value={{data, setData}}>
        <Login/>
        <Name/>
      </dataContext.Provider>
    </div>
  )
}

