import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

    const [ error, setError ] = useState(false)

    //extraer ciudad y pais
    const { ciudad, pais } = busqueda

    // funcion que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // funcion de submit del formulario
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        setConsultar(true)
    }


    return (    
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error className='red darken-4 error' mensaje='Todos los campos son obligatorios'></Error>}
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un País --</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>País: </label>
            </div>

            <div className='input-field col s12'>
                <input 
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}
 
export default Formulario;