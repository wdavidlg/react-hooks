import React from 'react'

const ShowIncrement = ({increment}) => {
    console.log('ShowIncrement renderizado')
    return (
        <div>
            <button className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}>
                Incrementar
            </button>
        </div>
    )
}

export default React.memo(ShowIncrement)
