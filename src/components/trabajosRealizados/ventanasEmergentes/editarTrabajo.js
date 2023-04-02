import React, { useState, useEffect } from "react";
import TrabajosRealizadosApi from "../../../api/TrabajosRealizadosApi";

export default function EditarTrabajo(props) {
  const { workId } = props;

  const [nameWork, setNameWork] = useState("");
  const [linkImg, setLinkImg] = useState([""]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    TrabajosRealizadosApi.getWork(workId).then((response) => {
      setNameWork(response.trabajo.nameWork)
      setLinkImg(response.trabajo.linkImg)
      setDescription(response.trabajo.description)
    });
  }, [workId]);

  const handleChangeNameWork = (event) => {
    setNameWork(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const addImageField = () => {
    setLinkImg([...linkImg, ""]);
  };

  const removeImageField = (index) => {
    const newFields = [...linkImg];
    newFields.splice(index, 1);
    setLinkImg(newFields);
  };

  const handleChangeImage = (index, event) => {
    const newFields = [...linkImg];
    newFields[index] = event.target.value;
    setLinkImg(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEditWork = () => {

    const data = {
      workId,
      nameWork,
      description,
      linkImg,
    };

    TrabajosRealizadosApi.editWork(data)
      .then((res) => {
        alert("Trabajo Realizado Creado con Éxito");
        window.location.href = "/trabajosRealizados";
      })
      .catch((res) => {
        alert("Lo sentimos... Algo salió mal :c");
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div
        data-aos="flip-up"
        className="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
      >
        <div className=" block p-2 ">
          <h5 className=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
            EDITAR - Trabajo Realizado
          </h5>
        </div>
      </div>
      <br />
      <br />
      <form className="px-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <div className="w-1/4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nameService"
            >
              Nombre del trabajo
            </label>
          </div>
          <div className="w-3/4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nameService"
              type="text"
              placeholder="Servicio"
              value={nameWork}
              onChange={handleChangeNameWork}
            />
          </div>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nameService"
            >
              Descripcion
            </label>
          </div>
          <div className="w-3/4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nameService"
              type="text"
              placeholder="Servicio"
              value={description}
              onChange={handleChangeDescription}
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
                  value={Image}
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

        <center>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleEditWork()}
          >
            Enviar
          </button>
        </center>
      </form>
    </div>
  );
}
