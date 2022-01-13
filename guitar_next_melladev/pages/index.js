import Layout from '../components/Layout'
import Listado from '../components/Listado.js'
import Curso from '../components/Curso.js'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({ guitarras, curso, entradas }) {
  return (
    <Layout
      pagina='Inicio'
      guitarras={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso}
      />

      <section className='contenedor'>
          <ListadoBlog 
            entradas={entradas}
          />
      </section>

    </Layout>  
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6&_sort=precio:desc`
  const urlCurso = `${process.env.API_URL}/cursos`
  const urlEntradas = 'http://localhost:1337/blogs?_limit=3&_sort=created_at:desc'

  const [ resGuitarras, resCurso, resEntradas ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlEntradas)
  ])

  const [ guitarras, curso, entradas ] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resEntradas.json()
  ])

  return {
      props: {
          guitarras,
          curso,
          entradas
      }
  }
}
