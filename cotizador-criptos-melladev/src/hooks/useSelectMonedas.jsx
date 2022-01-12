import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
`

const useSelectMonedas = label => {
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [ SelectMonedas ]
}

export default useSelectMonedas
