import React from 'react'

const Hijo = ({numero, incrementar}) => {
    console.log('Hijo renderizado');
    return (
        <>
            <button
            className='btn btn-primary me-3'
            onClick={() => incrementar(numero)}>
                {numero}
            </button>   
        </>
    )
}

export default React.memo(Hijo)
