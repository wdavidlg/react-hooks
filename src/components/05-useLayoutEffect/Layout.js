import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import './Layout.css'

export const Layout = () => {
    
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(counter);
    const {quote} = !!data && data[0];
    const parrafoRef = useRef(null);
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(parrafoRef.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            <blockquote className='blockquote text-end'>
                <p ref={parrafoRef}>{quote}</p>
            </blockquote>
            
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>


            <button
                className='btn btn-primary'
                onClick={increment}>Next Quote</button>
        </div>
    )
}