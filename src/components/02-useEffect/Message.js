import React, {useEffect} from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Message montado')
        return () => {
            console.log('Message desmontado')
        }
    }, [])

    const mouseMove = (e) => {
        console.log(':D');
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <>
            <h2>Eres genial!</h2>   
        </>
    )
}
