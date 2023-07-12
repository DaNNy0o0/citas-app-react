
import { Paciente } from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-5 md:mt-0 ">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administra tus{" "}
            <span className="text-red-600 font-black"> Pacientes y Citas</span>
          </p>

          {/* Listado de Pacientes */}

          {/* Recorremos el array de los pacientes y lo pasamos como prop al comp de Paciente, para usar su informacion */}
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-5 md:mt-0 ">
            No hay Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-5">
            Comienza añadiendo tus {" "}
            <span className="text-red-600 font-black"> Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
