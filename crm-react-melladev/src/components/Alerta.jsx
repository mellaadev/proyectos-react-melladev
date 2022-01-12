import React from 'react'

const Alerta = ({children}) => {
    return (
        <div className='text-center my-4 bg-red-600 font-bold text-white p-3'>
            {children}
        </div>
    )
}

export default Alerta
