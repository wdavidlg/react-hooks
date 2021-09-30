import React, { useCallback, useState } from 'react'
import Hijo from './Hijo';
import './Padre.css'

const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(num => {
        setValor(prev => prev + num);
    }, [])


    return (
        <div>
            <h2>Padre</h2>
            <p>Total: {valor}</p>
            <hr/>
            {
                numeros.map( item  => {
                   return <Hijo
                        key={item}
                        incrementar={incrementar}
                        numero={item} />
                })
            }
        </div>
    )
}

export default Padre
