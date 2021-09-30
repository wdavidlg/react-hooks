import React, { useState, useCallback } from 'react'
import './Memorize.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCounter((prev) => prev + num);
    }, [])

    //Otro uso del useCallback es cuando un efecto tiene como
    //dependencia una funcion
    //Si no se hace entonces el efecto se ejecutara en cada
    //renderizado
    // useEffect(() => {
        
    // }, [increment])

    return (
        <div>
            <h2>useCallback Hook</h2>
            <hr/>
            <h2>Counter: {counter}</h2>
            <hr/>

            <ShowIncrement increment={increment} />

        </div>
    )
}

export default CallbackHook
