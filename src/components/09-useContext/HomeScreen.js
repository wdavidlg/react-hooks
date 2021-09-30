import React, { useContext } from 'react'
import UserContext from './UserContext'

const HomeScreen = () => {

    const userContext = useContext(UserContext);
    const {user} = userContext;
    console.log(userContext)
    return (
        <div>
            <h2>HomeScreen</h2>
            <hr/> 
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>
        </div>
    )
}

export default HomeScreen
