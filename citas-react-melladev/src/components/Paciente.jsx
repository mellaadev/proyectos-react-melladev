const Paciente = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-xl rounded-md px-5 py-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Fran</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
                <span className="font-normal normal-case">08/01/2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Dolor estomacal con supuración de pus a traves de papilas gustativas.</span>
            </p>
        </div>
    )
}

export default Paciente
