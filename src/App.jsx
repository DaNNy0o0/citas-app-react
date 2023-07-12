import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // Estado del array de todos los pacientes
  const [pacientes, setPacientes] = useState([]);

  //******************************************************* */

  //Estado de un solo paciente
  const [paciente, setPaciente] = useState({});

  //******************************************************* */

  // Comrpobar si hay algo en local storage al cargar el componente
  useEffect(() => {
    // Creamos una fn que traiga los elementos disponibles en Local Storage o, que si no hay, cree un array
    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      // Seteamos los pacientes de local storage al array de pacientes al cargar el componente
      setPacientes(pacientesLS);
    };

    // Usamos la funcion al cargar el componente por primera vez 
    obtenerLS();
  }, []);

  //******************************************************* */


  // Guardar el array de pacientes en local storage
  useEffect(() => {
    // Colocamos el array de pacientes en Local Storage
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  //******************************************************* */

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Form
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
