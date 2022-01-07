import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Listadopacientes from "./components/Listadopacientes"

function App() {

  return (
    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">
        <Formulario />
        <Listadopacientes />
      </div>

    </div>
  )
}

export default App
