import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter( prev => prev + 1)
    }

    const decrement = () => {
        setCounter(prev => prev - 1)
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
