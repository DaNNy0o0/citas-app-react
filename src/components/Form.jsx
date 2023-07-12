import { useEffect, useState } from "react";
import { Error } from "./Error";

export const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //********************************************* */

  // Estado de cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //********************************************* */

  // Manejo de alerta
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  //********************************************* */

  // Manejo del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    //********************************************* */

    // Funcion que genera un ID unico para cada paciente
    const generarId = () => {
      // Generamos un ID random en formato string y lo retornamos
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
    };

    //********************************************* */

    // Creamos el objeto del paciente con los datos introducidos en cada campo
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el registro
      // Asignamos el mismo id del paciente al objetoPaciente
      objetoPaciente.id = paciente.id

      // Recorremos el array con todos los pacientes. Si el paciente del array tiene el mismo ID del que estamos editando, retornamos el objeto a editar.
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      // Seteamos los nuevos pacientes actualizados al array general de pacientes
      setPacientes(pacientesActualizados)

      // Reseteamos el objeto de Paciente
      setPaciente({})

    } else {
      // Añadiendo nuevo registro
      // Asignamos el objetoPaciente al array general de pacientes, mediante una copia con el spread operator
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //********************************************* */

    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{" "}
        <span className="text-red-600 font-black ">administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre"
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Propietario
          </label>
          <input
            type="text"
            placeholder="Propietario"
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha de Ingreso
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            placeholder=" Describe los síntomas..."
            className="border-2 mt-2 placeholder-gray-300 w-full"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
          <input
            type="submit"
            className="bg-red-600 w-full p-3 text-white uppercase font-bold rounded-md mt-5 hover:bg-red-800 cursor-pointer transition-all"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </div>
      </form>
    </div>
  );
};
