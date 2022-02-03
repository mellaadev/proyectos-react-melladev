import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

  const [ consultar, setConsultar ] = useState(false)

  const [ resultado, setResultado ] = useState({})

  const [ error, setError ] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        const appId = 'c6362e0b40077fa377df8a201c500316'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const resultado = await fetch(url)
        const respuesta = await resultado.json()

        setResultado(respuesta)
        setConsultar(false)

        if(respuesta.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if(error) { 
    componente = <Error mensaje='No hay resultados' />
  } else {
    componente = <Clima 
                  resultado={resultado}
                />
  }

  return (
    <>
      <Header 
        titulo='Clima React App'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
