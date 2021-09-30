import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './CounterApp.css'
export const CounterAppCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
          <h1>Counter With Hook: { state }</h1>   
          <hr/>

          <button 
          className='btn btn-primary'
          onClick = {increment}>+1</button>
          <button 
          className='btn btn-primary'
          onClick = {reset}>reset</button>
          <button className='btn btn-primary'
          onClick = {decrement}>-1</button>
        </>
    )
}
