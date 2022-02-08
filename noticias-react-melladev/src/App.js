import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'

function App() {

    // definiar la categoria y noticias
    const [ categoria, setCategoria ] = useState('');
    const [ noticias, setNoticias ] = useState([]);

    //al cambiar categoria, hacer busqueda
    useEffect(() => {
        const consultarAPI = async () => {
            const apiKey = '68c47b70e8644ddbbc10f0a48ecdce97'
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`

            const respuesta = await fetch(url)
            const noticias = await respuesta.json()

            setNoticias(noticias.articles)
        }

        consultarAPI()
    }, [categoria]);
    

  return (
    <>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className='container white'>
        <Formulario 
            setCategoria={setCategoria}
        />

        <ListadoNoticias 
            noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
