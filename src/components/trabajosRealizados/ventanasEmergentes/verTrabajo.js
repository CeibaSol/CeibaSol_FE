import React, { useState, useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Carrusel from "../CarruselTres";
import TrabajosRealizadosApi from "../../../api/TrabajosRealizadosApi";

export default function VerTrabajo(props) {
  const { workId } = props;
  const [work, setWork] = useState([]);

  useEffect(() => {
    TrabajosRealizadosApi.getWork(workId).then((response) => {
      setWork(response.trabajo);
      
    });
  }, [workId]);
  
  return (
    <div className="block bg-white">
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
        {work.nameWork}
      </h4>

      <div className="bg-gray-400 rounded-lg rounded-[12px] flex space-x-2 justify-center">
        <div class="flex flex-wrap justify-center ">
          <div class="w-1/6 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 my-6  rounded-lg ">
            <Carrusel imagenes={work.linkImg}></Carrusel>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full p-4">
        <div role="list" className="space-y-5">
          <li className="flex space-x-3">
            <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
            <h1 className="text-base font-normal leading-tight text-gray-700">
              <p class="text-justify">
                {work.description}
              </p>
            </h1>
          </li>
        </div>
      </div>
    </div>
  );
}
