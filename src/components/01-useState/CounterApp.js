import React, { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    const handleClick = () => {
        setState((prev) => {
            return {
                ...prev,
                counter1: counter1 + 1
            }
        })
    }

    const {counter1, counter2} = state;
    return (
        <>
            <h2>Counter1: {counter1}</h2>
            <hr/>
            <h2>Counter2: {counter2}</h2>      
            <hr/>
            <button
                className='btn btn-primary'
                onClick={handleClick}
            >+1</button>
        </>
    )
}
