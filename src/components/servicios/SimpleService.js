import React from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import VerUnServicio from "./PopUps/VerUnServicio.js"
import NuevoServicio from "./PopUps/NuevoServicio.js"
import EditarServicio from "./PopUps/EditarServicio.js"
function ImageGrid(props) {
    const { images, serviceTitle, subServices, serviceId } = props;
    const [showServiceState, setShowServiceState] = useState(false);
    const [newServiceState, setNewServiceState] = useState(false);
    const [editServiceState, setEditServiceState] = useState(false);
    
    const activateShowServicePopup = (nameService) => {
        setShowServiceState(!showServiceState);
    }
    const activateNewServicePopUp = () => {
        setNewServiceState(!newServiceState)
    }
    const deactivateEditServicePopUp = () => {
        setEditServiceState(!editServiceState)
    }
    const deactivateServicePopup = () => {
        setNewServiceState(false)
        setEditServiceState(false)
        setShowServiceState(false)
    }

    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h4 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {serviceTitle}
            </h4>
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {images?.map((image, index) => (
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img src={image} alt={"image" + index} className="block object-cover object-center w-full h-48 rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap w-full p-4">
                <div role="list" className="space-y-5">
                    {subServices?.map((subservice) => (
                        <li data-aos="fade-right" className="flex space-x-3">
                            <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
                            <h1 className="text-base font-normal leading-tight text-gray-700">
                                <strong>{subservice}</strong>
                            </h1>
                        </li>
                    ))}
                </div>
            </div>
            <center>
                <div className="py-8">
                    <button
                        className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                        onClick={activateShowServicePopup}
                    >
                        Ver Servicio
                    </button>
                    {" "}
                    <button
                        className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                        onClick={deactivateEditServicePopUp}
                    >
                        Editar Servicio
                    </button>
                    {" "}
                    <button
                        className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                        // onClick={() => activateShowServicePopup()}
                    >
                        Eliminar Servicio
                    </button>
                    {" "}
                </div>
            </center>
            <div>
                {showServiceState &&
                    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50">
                        <div className=" my-16 max-h-24">
                            <div className="flex items-center justify-center">
                                <div className="bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                                    <VerUnServicio serviceId={serviceId} />
                                    <div className="py-8">
                                        <center>
                                            <button
                                                className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                                onClick={deactivateServicePopup}
                                            >
                                                Cerrar
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {false &&//showServiceState &&
                    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50">
                        <div className=" my-16 max-h-24">
                            <div className="flex items-center justify-center">
                                <div className="bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                                    <NuevoServicio serviceId={serviceId} />
                                    <div className="py-8">
                                        <center>
                                            <button
                                                className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                                onClick={deactivateServicePopup}
                                            >
                                                Cerrar
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {editServiceState &&
                    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50">
                        <div className=" my-16 max-h-24">
                            <div className="flex items-center justify-center">
                                <div className="bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                                    <EditarServicio serviceId={serviceId} />
                                    <div className="py-8">
                                        <center>
                                            <button
                                                className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                                onClick={deactivateServicePopup}
                                            >
                                                Cerrar
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default ImageGrid;