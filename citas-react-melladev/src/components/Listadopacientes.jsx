import Paciente from "./Paciente"

const Listadopacientes = ({ pacientes, setPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">
                        Administra tus {''}
                        <span className="text-purple-700 font-bold">Pacientes y Citas</span>
                    </p>
        
                    { pacientes.map( paciente => (
                        <Paciente   
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">
                        Comienza agregando pacientes {''}
                        <span className="text-purple-700 font-bold">y apareceran en este lugar</span>
                    </p>
                </>
            )}

            

        </div>
    )
}

export default Listadopacientes
