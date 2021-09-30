import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './Memorize.css'
import {procesoPesado} from './helpers/procesoPesado'

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);

    const resProcesoPesado = useMemo(() => {
        return procesoPesado(counter)
    }, [counter]);
    console.log(typeof resProcesoPesado);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr></hr>
            
            <h3>Counter : {counter} </h3>
            <hr/>
            <p> { resProcesoPesado} </p>
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
