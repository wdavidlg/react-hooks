import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import './MultipleCustomHooks.css'

export const MultipleCustomHooks = () => {
    
    const {counter, increment} = useCounter(1);
    const {data, loading, error} = useFetch(counter);
    console.log(data, loading, error)

    const {quote_id:id, author, quote} = !!data && data[0];
    console.log(id, author, quote)
    // !!null = false > variables igual a undefined
    // !null = true
    // !![arreglo] = true > las variables se desestructuran
    console.log(error);
    if(error){
        return(
            <div className='alert alert-danger text-center'>
                Error al cargar los datos
            </div>  
        );
    }

    return (
        <div>
            <h1>The Breaking Bad Quotes</h1>
            <hr/>

            {
                loading ? 
                <div className='alert alert-success text-center'>
                Loading...
                </div>
                :
                <blockquote className='blockquote text-end'>
                    <p>{id}</p>
                    <p>{quote}</p>
                    <p className='blockquote-footer'>{author}</p>
                </blockquote>
            }
            <button
                className='btn btn-primary'
                onClick={increment}>Next Quote</button>
        </div>
    )
}
