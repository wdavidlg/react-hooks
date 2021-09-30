import React, { useRef } from 'react'
import './FocusScreen.css'

export const FocusScreen = () => {

    const inputRef = useRef(null);
    console.log(inputRef);

    const handleClick = () => {
        //document.querySelector('input').focus();
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h2>Focus Screen</h2>  
            <hr/>
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Name' />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
                >Focus</button>
        </>
    )
}
