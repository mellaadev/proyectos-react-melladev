import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {

    //extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    // Grados kelvin
    const kelvin = 271.15

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {parseInt(main.temp - kelvin, 10)} <span> &#x2103; </span>
                </p>
                <p>Sensación Térmica: {''} 
                    {parseInt(main.feels_like - kelvin, 10)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima: {''} 
                    {parseInt(main.temp_max - kelvin, 10)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Mínima: {''} 
                    {parseInt(main.temp_min - kelvin, 10)} <span> &#x2103; </span>
                </p>
                <p>Humedad: {''} 
                    {parseInt(main.humidity, 10)} <span>% </span>
                </p>
                <p>Presión: {''} 
                    {parseInt(main.pressure, 10)} <span> hPa </span>
                </p>
            </div>    
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;