import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Listadopacientes from "./components/Listadopacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}  
          setPacientes={setPacientes}
        />
        <Listadopacientes 
          pacientes={pacientes}
        />
      </div>

    </div>
  )
}

export default App
