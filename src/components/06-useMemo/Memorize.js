import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import {Small} from './Small'
import './Memorize.css'

export const Memorize = () => {

    const {counter, increment} = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr></hr>
            
            <h3>Counter : <Small value={counter}/> </h3>
            <hr/>
            <button
            className='btn btn-primary mt-5'
            onClick={increment}>+1</button>
            <button
            className='btn btn-outline-primary ms-5 mt-5'
            onClick={() => {
                setShow(!show)
            }}>show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
