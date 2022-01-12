import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente, handleEliminar }) => {
    const navigate = useNavigate()

    const { id, nombre, empresa, email, telefono } = cliente

    return (
        <tr className='border-b hover:bg-gray-100 transition-all'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>

                <button
                    className='bg-yellow-500 hover:bg-yellow-600 transition-all block text-white w-full p-2 uppercase font-bold text-xs'
                    type='button'
                    onClick={ () => navigate(`/clientes/${id}`)}
                >Ver</button>

                <button
                    className='bg-blue-600 hover:bg-blue-700 transition-all block text-white w-full p-2 uppercase font-bold text-xs mt-3'
                    type='button'
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>

                <button
                    className='bg-red-600 hover:bg-red-700 transition-all block text-white w-full p-2 uppercase font-bold text-xs mt-3'
                    type='button'
                    onClick={ () => handleEliminar(id)}
                >Eliminar</button>

            </td>
        </tr>
    )
}

export default Cliente
