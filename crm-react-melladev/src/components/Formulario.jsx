import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El Nombre es muy corto')
                    .max(40, 'El Nombre es muy largo')
                    .required('El Nombre del Cliente es Obligatorio'),
        empresa: Yup.string()
                    .required('El Nombre de la Empresa es Obligatorio'),
        email: Yup.string()
                    .email('El Email no es Válido')
                    .required('El Email es Obligatorio'),
        telefono: Yup.number()
                    .positive('Número no Válido')
                    .integer('Número no Válido')
                    .typeError('El Número no es Válido')
    })

    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes'

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json()

            navigate('/clientes')

        } catch (error) {
            console.log('Has tirado el maravilloso server que habias creado, ahora te jodes y lo arreglas.')
        }
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded:md shadow-md md:w-3/4 md:mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)

                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({errors, touched}) => {
                    return (
                <Form 
                    className='mt-10'
                >
                    <div className='mb-4'>
                        <label 
                            htmlFor="nombre"
                            className='text-gray-800'
                        >Nombre: </label>
                        <Field 
                            id='nombre'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Nombre del cliente'
                            name='nombre'
                        />
                        
                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ) : null}

                    </div>

                    <div className='mb-4'>
                        <label 
                            htmlFor="empresa"
                            className='text-gray-800'
                        >Empresa: </label>
                        <Field 
                            id='empresa'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Empresa del cliente'
                            name='empresa'
                        />

                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                        ) : null}

                    </div>

                    <div className='mb-4'>
                        <label 
                            htmlFor="email"
                            className='text-gray-800'
                        >Email: </label>
                        <Field 
                            id='email'
                            type='email'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Email del cliente'
                            name='email'
                        />

                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                        ) : null}
                    </div>

                    <div className='mb-4'>
                        <label 
                            htmlFor="telefono"
                            className='text-gray-800'
                        >Teléfono: </label>
                        <Field 
                            id='telefono'
                            type='tel'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Teléfono del cliente'
                            name='telefono'
                        />

                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                        ) : null}
                    </div>

                    <div className='mb-4'>
                        <label 
                            htmlFor="notas"
                            className='text-gray-800'
                        >Notas: </label>
                        <Field 
                            as='textarea'
                            id='notas'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50 h-40'
                            placeholder='Notas del cliente'
                            name='notas'
                        />
                    </div>

                    <input
                        type='submit'
                        value='Agregar Cliente'
                        className='mt-5 w-full bg-blue-800 uppercase text-white p-3 text-lg font-bold cursor-pointer'
                    />
                </Form>

                    
                )}}
            </Formik>
        </div>
    )
}

export default Formulario
