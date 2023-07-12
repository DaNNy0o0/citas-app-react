export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {


  // Estraemos cada campo del paciente y lo asignamos a los values
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {

    const respuesta = confirm('¿Deseas eliminar este paciente?')

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 uppercase text-red-600">
        Mascota:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-red-600">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>

      <p className="font-bold mb-3 uppercase text-red-600">
        Email:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-red-600">
        Fecha de Ingreso:{" "}
        <span className="font-normal normal-case text-black">{fecha}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-red-600">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex justify-end">
        <button
          type="button"
          className="py-2 px-10 mt-6 bg-indigo-600 text-center text-white rounded-md mr-3 font-bold uppercase hover:bg-indigo-700 "
          onClick={() => setPaciente(paciente)}
          >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 mt-6 bg-red-600 text-center text-white rounded-md font-bold uppercase hover:bg-red-700 "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
