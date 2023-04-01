import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Carrusel from "../CarruselTres";

export default function VerTrabajo() {
  return (
    <div className="block bg-white">
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
        {"serviceTitle"}
      </h4>

      <div className="bg-gray-400 rounded-lg rounded-[12px] flex space-x-2 justify-center">
        <div class="flex flex-wrap justify-center ">
          <div class="w-1/6 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 my-6  rounded-lg ">
            <Carrusel></Carrusel>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full p-4">
        <div role="list" className="space-y-5">
          <li className="flex space-x-3">
            <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
            <h1 className="text-base font-normal leading-tight text-gray-700">
              <p class="text-justify">Si el cuadro combinado (combobox) en Outlook no muestra las opciones, puede intentar las siguientes soluciones: Verifique que el cuadro combinado esté habilitado: puede hacerlo en la pestaña "Desarrollador" en la cinta de opciones de Outlook. Si la pestaña "Desarrollador" no está visible, haga clic en "Archivo", seleccione "Opciones" y luego "Personalizar cinta de opciones" y active la opción "Desarrollador". Compruebe que el control del cuadro combinado esté configurado correctamente: para hacer esto, haga clic con el botón derecho del ratón en el control del cuadro combinado y seleccione "Propiedades". Asegúrese de que la propiedad "Row Source" esté configurada correctamente y que la propiedad "Bound Column" tenga el valor correcto. Asegúrese de que el formulario que contiene el cuadro combinado tenga permisos de seguridad suficientes: si el formulario tiene restricciones de seguridad, el cuadro combinado puede estar deshabilitado. Para solucionar este problema, debe ajustar la configuración de seguridad. Compruebe que la fuente de datos del cuadro combinado esté disponible: si la fuente de datos está en una ubicación de red, asegúrese de que la conexión a la red esté activa y que tenga acceso a la ubicación de la fuente de datos. Intente reiniciar Outlook y el equipo: a veces, un reinicio puede solucionar problemas técnicos y errores en el software. Si ninguna de estas soluciones funciona, es posible que desee buscar en los foros y comunidades de soporte técnico de Microsoft o ponerse en contacto con el soporte técnico de Microsoft para obtener más ayuda.</p>
            </h1>
          </li>
        </div>
      </div>
    </div>
  );
}
