import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import EditarTrabajo from "./ventanasEmergentes/editarTrabajo";
import EliminarTrabajo from "./ventanasEmergentes/eliminarTrabajo";

export default function TrabajosRealizado() {
  const [windowVer, setWindowVer] = useState(false);
  const [windowEditar, setWindowEditar] = useState(false);
  const [windowEliminar, setWindowEliminar] = useState(false);
  return (
    <div className=" px-4 py-6 sm:px-0 space-y-8">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h4 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {"serviceTitle"}
        </h4>
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg"
                  }
                  alt={"image" + "index"}
                  className="block object-cover object-center w-full h-48 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full p-4">
          <div role="list" className="space-y-5">
            <li data-aos="fade-right" className="flex space-x-3">
              <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
              <h1 className="text-base font-normal leading-tight text-gray-700">
                <strong>{"hola"}</strong>
              </h1>
            </li>
          </div>
        </div>
        <center>
          <div className="py-8">
            <button
              className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
              onClick={() => setWindowVer(true)}
            >
              Ver Servicio
            </button>{" "}
            <button
              className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
              onClick={() => setWindowEditar(true)}
            >
              Editar Servicio
            </button>{" "}
            <button
              className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
              onClick={() => setWindowEliminar(true)}
            >
              Eliminar Servicio
            </button>{" "}
          </div>
        </center>
        <div>
          {windowVer ? (
            <div
              data-aos="zoom-in"
              class="fixed inset-0  flex justify-center items-center"
            >
              <div class="fixed inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center">
                <div class="bg-white p-4 mt-16 h-min rounded-lg rounded-[12px] shadow-lg">
                  <h1>VISIALIZAR</h1>
                  <button
                    class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                    onClick={() => setWindowVer(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {windowEditar ? (
            <div
              data-aos="zoom-in"
              className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50"
            >
              <div className="max-h-24">
                <div className="flex items-center justify-center">
                  <div className="my-16 bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                    <EditarTrabajo></EditarTrabajo>
                    <button
                      class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                      onClick={() => setWindowEditar(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {windowEliminar ? (
            <div
              data-aos="zoom-in"
              class="fixed inset-0  flex justify-center items-center"
            >
              <div class="fixed inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center">
                <div class="bg-white  mt-16 h-min rounded-lg rounded-[12px] shadow-lg">
                  <EliminarTrabajo></EliminarTrabajo>
                  <div className="flex justify-evenly">
                    <button
                      class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                      onClick={() => setWindowEliminar(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
