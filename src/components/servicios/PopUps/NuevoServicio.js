import { useState } from "react";
import ServiceApi from "../../../api/Service";

function App() {
    const [nameService, setNameService] = useState("");
    const [linkImg, setLinkImg] = useState([""]);
    const [subService, setSubService] = useState([""]);

    const handleChangeTitle = (event) => {
        setNameService(event.target.value);
    };

    const addImageField = () => {
        setLinkImg([...linkImg, ""]);
    };

    const removeImageField = (index) => {
        const newFields = [...linkImg];
        newFields.splice(index, 1);
        setLinkImg(newFields);
    };

    const addSubservicioField = () => {
        setSubService([...subService, ""]);
    };

    const removeSubservicioField = (index) => {
        const newFields = [...subService];
        newFields.splice(index, 1);
        setSubService(newFields);
    };

    const handleChangeImage = (index, event) => {
        const newFields = [...linkImg];
        newFields[index] = event.target.value;
        setLinkImg(newFields);
    };

    const handleChangeSubservicio = (index, event) => {
        const newFields = [...subService];
        newFields[index] = event.target.value;
        setSubService(newFields);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleNewService = () => {
        const data = {
            nameService,
            subService,
            linkImg
        }
        ServiceApi.newService(data)
        .then((res) => {
            alert("Servicio Creado con Éxito");
        })
        .catch((res)=>{
            alert("Lo sentimos... Algo salió mal :c")    
        })
    }

    return (
        <div className="container mx-auto p-4">
            <div
                data-aos="flip-up"
                className="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
            >
                <div className=" block p-2 ">
                    <h5 className=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
                        Nuevo Servicio
                    </h5>
                </div>
            </div>
            <br /><br />
            <form className="px-8" onSubmit={handleSubmit} >
                <div className="mb-4 flex">
                    <div className="w-1/4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="nameService">
                            Título del Servicio
                        </label>
                    </div>
                    <div className="w-3/4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nameService"
                            type="text"
                            placeholder="Servicio"
                            value={nameService}
                            onChange={handleChangeTitle}
                        />
                    </div>
                </div>
                {linkImg.map((Image, index) => (
                    <div className="mb-4 flex" key={index}>
                        <div className="w-1/4">
                            <label className="block text-gray-700 font-bold mb-2">
                                {index === 0 ? "Links Imagenes" : ""}
                            </label>
                        </div>
                        <div className="w-3/4">
                            <div className="flex">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                    id={`Image-${index}`}
                                    type="text"
                                    placeholder="Link de Imagen"
                                    value={Image.Image}
                                    onChange={(event) => handleChangeImage(index, event)}
                                />
                                {linkImg.length > 1 && (
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={() => removeImageField(index)}
                                    >
                                        -
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mb-4 flex">
                    <div className="w-1/4" />
                    <div className="w-3/4">
                        <div className="flex">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={addImageField}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                {subService.map((Subservicio, index) => (
                    <div className="mb-4 flex" key={index}>
                        <div className="w-1/4">
                            <label className="block text-gray-700 font-bold mb-2">
                                {index === 0 ? "Sub Servicios" : ""}
                            </label>
                        </div>
                        <div className="w-3/4">
                            <div className="flex">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                    id={`Subservicio-${index}`}
                                    type="text"
                                    placeholder="Sub Servicio"
                                    value={Subservicio.Subservicio}
                                    onChange={(event) => handleChangeSubservicio(index, event)}
                                />
                                {subService.length > 1 && (
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={() => removeSubservicioField(index)}
                                    >
                                        -
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mb-4 flex">
                    <div className="w-1/4" />
                    <div className="w-3/4">
                        <div className="flex">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={addSubservicioField}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <center>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
                        onClick={() => handleNewService()}
                    >
                        Enviar
                    </button>
                </center>
            </form>
        </div>
    )
}
export default App;
