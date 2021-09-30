import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        const {value} = e.target;
        const {name} = e.target;
        setValues((prev) => ({...prev, [name]: value}))
    }

    const reset = () => {
        setValues(initialState)
    }

    return [values, handleInputChange, reset];
}
