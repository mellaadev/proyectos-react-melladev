import Image from "next/image"
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra }) => {

    const { descripcion, imagen, nombre, precio } = guitarra[0]

    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image 
                    layout="responsive"
                    width={180}
                    height={350}
                    src={imagen.url}
                    alt={`Imagen Guitarra ${nombre}`}
                />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                    <p className={styles.precio}>{precio}€</p>

                    <form className={styles.formulario}>
                        <label>Cantidad: </label>

                        <select>
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input 
                            type='submit'
                            value='Agregar al Carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {

    const urlAPI = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlAPI)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}

export default Producto
