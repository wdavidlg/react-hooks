import React, { useState } from 'react'
import './FocusScreen.css'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Real Example Ref</h1>   
            <hr/>
            { show && <MultipleCustomHooks />}
            <button
            className='btn btn-outline-primary mt-5'
            onClick={() => {
                setShow(!show);
            }}>
                Show-Hide
            </button>
        </>
    )
}
