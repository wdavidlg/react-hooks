import React from 'react'
import { useForm } from '../../hooks/useForm'
import './SimpleForm.css'

export const FormCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Password'
                    autoComplete = 'off'
                    value = {password}
                    onChange = {handleInputChange} 
                />
            </div>
            
            <input 
                type='submit' 
                value='Guardar' 
                className='btn btn-primary' />
        </form>
    )
}
