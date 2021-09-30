import React, { useContext } from 'react'
import UserContext from './UserContext'

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const user = {
        id: 1234,
        name: 'Jorge',
        email: 'jorge@jorge.com'
    }

    return (
        <div>
            <h2>LoginScreen</h2>
            <hr/>
            <button 
            className='btn btn-secondary'
            onClick={() => {setUser(user)}}>
                Login
            </button>
        </div>
    )
}

export default LoginScreen
