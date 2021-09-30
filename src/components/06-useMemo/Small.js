import React from 'react'

//Si los props no cambian no se renderiza nuevamente el componente
//Memo guarda el valor actual del prop
//
export const Small = React.memo(({value}) => {
    console.log('Small fue llamado')
    return (
        <small>
            {value}
        </small>
    )
})
