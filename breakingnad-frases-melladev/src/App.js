import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  height: auto;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  transition: all .3s ease;

  &:hover
  {
    cursor: pointer;
    border: 2px solid #0F574E;
  }
`;

function App() {

  // State de frases

  const [ frase, setFrase ] = useState('')

  const consultarAPI = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

    const resultado = await fetch(url)
    const frase = await resultado.json()

    setFrase(frase[0])
  }

  useEffect(() => {
    consultarAPI()
  }, []);
  

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
