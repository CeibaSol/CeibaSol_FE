import React from "react";
import TrabajosRealizadosApi from "../../../api/TrabajosRealizadosApi";

export default function EliminarTrabajo(props) {

  const { workId, nameWork } = props;

  const handleDeleteWork = () => {   
    TrabajosRealizadosApi.deleteWork(workId)
      .then((res) => {
        alert("Trabajo Realizado Eliminado con Éxito");
        window.location.href = "/trabajosRealizados";
      })
      .catch((res) => {
        alert("Lo sentimos... Algo salió mal :c");
      });
  };

  return (
    <div class="max-w-sm p-6 bg-white rounded-lg  ">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 flex justify-center">
        {nameWork}
      </h1>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-center">
        <strong> ¿Seguro que deseas eliminar?</strong>
      </p>
      <center>
        <div className="flex justify-evenly">
          <button
            className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-emerald-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-16"
            onClick={() => handleDeleteWork()}
          >
            Si
          </button>{" "}
        </div>
      </center>
    </div>
  );
}
