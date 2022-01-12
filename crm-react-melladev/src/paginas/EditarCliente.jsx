import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from "../components/Formulario"

const EditarCliente = () => {

    const [ cliente, setCliente ] = useState({})
    const [ cargando, setCargando ] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)

            } catch (error) {
                console.log(error)
                setCargando(false)
            }

            setTimeout(() => {
                setCargando(false)
            }, 2000);
        }

        obtenerClienteAPI()
    }, [])

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>   
            <p className='mt-3'>Utiliza este formulario para hacer cambios en un cliente.</p>

            {cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p className='mt-10 font-bold text-blue-800 uppercase text-3xl'>Cliente ID no Válido</p>}
        </>
    )
}

export default EditarCliente
