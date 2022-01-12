import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;

    transition: all .3s ease-in-out;

    &:hover
    {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`

const Formulario = () => {

    const [ SelectMonedas ] = useSelectMonedas('Elige tu Moneda')

    return (
        <form>
            
            <SelectMonedas />


            <InputSubmit 
                type="submit" 
                value='Cotizar' 
            />   
        </form>
    )
}

export default Formulario
