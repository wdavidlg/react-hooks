import React, { useEffect, useState } from 'react'
import {Message} from './Message'
import './SimpleForm.css'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect(() => {
        console.log('Hey')
    }, []);

    useEffect(() => {
        console.log('El formState cambio')
    }, [formState]);

    useEffect(() => {
        console.log('Email cambio')
    }, [formState.email]);


    const handleInputChange = (e) => {
        const {value} = e.target;
        const {name} = e.target;
        setFormState((prev) => ({...prev, [name]: value}))
    }

    return (
        <>
            <h2>{name}</h2> 
            <h2>{email}</h2> 
            <hr/>  

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    autoComplete = 'off'
                    value = {name}
                    onChange = {handleInputChange} 
                />
                <input 
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete = 'off'
                    value = {email}
                    onChange = {handleInputChange} 
                />
            </div>
            {name==='123' && <Message />}
        </>
    )
}
