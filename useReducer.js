import {React, useReducer} from 'react'
import './App.css'

function reducer(state, action){
  switch(action.type){
    case 'inc': return {num: state.num+1}
    case 'dec': return {num: state.num-1}
    default: return state
  }
}

export function App() {

  const[state, dispatch] = useReducer(reducer, {num: 0})

  function dec(){
    dispatch({type: 'dec'})
  }

  function inc(){
    dispatch({type: 'inc'})
  }


  return (
    
    <div className='App'>
      {/* <button onClick={def}>def</button> */}
      <br/>
      <br/>
      <button onClick={inc}>+</button>
      <h1>{state.num}</h1>
      <button onClick={dec}>-</button>
    </div>
  )
}