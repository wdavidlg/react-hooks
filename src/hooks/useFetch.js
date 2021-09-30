import { useEffect, useRef, useState } from "react";


export const useFetch = (id) => {

    const isMounted = useRef(true);

    const base = 'https://breakingbadapi.com/api/';
    const endpoint = 'quotes/';
    const url = `${base}${endpoint}${id}`;

    const [state, setState] = useState({
        data: null, 
        loading: true,
        error: null
    })

    useEffect(() => {
        console.log('Mounted...');
        return () => {
            isMounted.current = false;
            console.log('Paso a falso', isMounted)
        }
    }, [])

    useEffect(() => {

        setState({
            data: null, 
            loading: true,
            error: null
        })

        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setTimeout(() => {

                    if(isMounted.current){
                        console.log('aaaaa-',isMounted)
                        try{
                            if(data.name){
                                throw 'No hay info';
                            }
                            setState({
                                loading: false,
                                error: null,
                                data
                            })
                        }catch(err){
                            setState({
                                loading: false,
                                error: err,
                                data: null
                            })
                        }
                    }else{
                        console.log('setState no se llamó')
                    }
                }, 1000)
            })
    }, [url])

    return state;

}
