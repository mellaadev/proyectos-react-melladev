import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [ busqueda, setBusqueda ] = useState('')
  const [ imagenes, setImagenes ] = useState([])
  const [ pagina, setPagina ] = useState(1);
  const [ totalPaginas, setTotalPaginas ] = useState(1);

  useEffect(() => {
	if(busqueda === '') return;


	const consultarAPI = async () => {
	  const imagenesPorPagina = 30;
	  const key = '25625212-5921183e421a6c8de94615deb';
	  const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${pagina}`;

	  const respuesta = await fetch(url);
	  const resultado = await respuesta.json();

	  setImagenes(resultado.hits);

	  // calcular total de paginas
	  const calcularTotalPaginas = Math.ceil( resultado.totalHits / imagenesPorPagina );
	  setTotalPaginas(calcularTotalPaginas);

	  //mover la pantalla hacia arriba
		const jumbotron = document.querySelector('.jumbotron');
		jumbotron.scrollIntoView({ behavior: 'smooth' })
	}

	consultarAPI()
  }, [busqueda, pagina]);

  //definir la pagina anterior
  const paginaAnterior = () => {
	  const nuevaPaginaActual = pagina - 1

	  if(nuevaPaginaActual === 0) return;

	  setPagina(nuevaPaginaActual)
  }

  // definir la pagina siguiente
  const paginaSiguiente = () => {
	const nuevaPaginaActual = pagina + 1

	if(pagina > totalPaginas) return;

	setPagina(nuevaPaginaActual)
  }
  

  return (
	<div className='container'>
	  <div className='jumbotron'>
		<p className='lead text-center'></p>

		<Formulario 
		  setBusqueda={setBusqueda}
		/>
	  </div>

	  <div className='row justify-content-center'>
		<ListadoImagenes 
		  imagenes={imagenes}
		/>

		

		{ (pagina === 1) ? null : (
			<button 
				type='button'
				className='bbtn btn-info mr-1'
				onClick={paginaAnterior}
			>&laquo; Anterior</button>
		)}
		
		{ (pagina === totalPaginas) ? null : (
			<button 
				type='button'
				className='bbtn btn-info'
				onClick={paginaSiguiente}
			>Siguiente &raquo;</button>
		)}
	  </div>
	</div>
  );
}

export default App;
