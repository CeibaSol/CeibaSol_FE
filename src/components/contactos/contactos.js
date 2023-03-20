import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import ContactoApi from "../../api/ContactoApi";
import backgroundImage from "./fondoCon.jpg";

export default function Contactos() {
  const [offsetY, setOffsetY] = useState(0);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [windowEmergente, setWindowEmergente] = useState(false);
  const [mensajeEmergente, setMensajeEmergente] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `center ${offsetY * 0.3}px`,
    minHeight: "100vh",
  };

  const styles1 = {
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `center ${offsetY * -0.9}px`,
    minHeight: "100vh",
  };

  const cleanFields = () => {
    setNombre("");
    setCorreo("");
    setTelefono("");
    setAsunto("");
    setMensaje("");
  };

  const enviarCorreo = () => {
    setLoading(true);
    const data = {
      nombre,
      correo,
      telefono,
      asunto,
      mensaje,
    };

    ContactoApi.enviarCorreo(data)

      .then((res) => {
        setMensajeEmergente(res.message);
        setWindowEmergente(true);
      })
      .catch((res) => {
        setMensajeEmergente(res.response.data.err);
        setWindowEmergente(true);
      });
  };

  return (
    <div data-aos="zoom-out-up" class="" style={styles}>
      <header class="">
        <div
          data-aos="fade-up"
          className="scroll-smooth hover:scroll-auto pt-6 flex space-x-2 justify-center "
        >
          <h1 class="animate-pulse text-5xl font-medium leading-tight text-white mb-2.5">
            CONTACTOS
          </h1>
        </div>
      </header>
      <main
        className="px-40 mt-100 scroll-smooth hover:scroll-auto"
        style={styles1}
      >
        <div className=" mb-2 bg-white shadow mx-auto max-w-7xl py-2 sm:px-6 lg:px-10 ">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white-100 ">
              <div className="flex space-x-2 justify-center"></div>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, proin
              tristique molestie ante sodales quis quam blandit, suscipit donec
              dignissim mus ligula nam. Sociis vestibulum tempor habitasse
              potenti platea rutrum fusce ornare eget himenaeos porta libero
              conubia tellus ullamcorper, et vulputate cum velit sagittis magna
              justo enim orci metus in faucibus congue primis. Nostra per platea
              convallis netus varius orci cursus eu velit, auctor tempus sem
              nascetur curabitur metus potenti litora, etiam class semper proin
              morbi lacinia volutpat nunc. Etiam feugiat elementum vestibulum
              tellus sodales condimentum urna, rhoncus sed penatibus magna
              maecenas varius, metus platea facilisis sagittis pellentesque hac.
              Semper mollis viverra metus varius lacus massa iaculis erat,
              commodo gravida consequat sodales dis curae. Neque eleifend
              lacinia himenaeos ultricies est cras nisl auctor, mauris aliquet
              rhoncus a non vulputate habitant hendrerit, metus potenti
              tristique orci aliquam natoque tortor facilisi, nisi id sed platea
              nunc gravida conubia.
              <div class="grid grid-cols-2 gap-4 items-center m-10">
                <div
                  data-aos="zoom-out-left"
                  className="border border-gray-200  flex space-x-2 justify-center"
                >
                  <iframe
                    title="ubicacion"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63519.663296554856!2d-72.96614849428158!3d5.716169144911916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a4674de99eae1%3A0x85f7d804dcaad1a6!2sParque%20El%20Laguito!5e0!3m2!1ses!2sco!4v1675704068375!5m2!1ses!2sco"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div class=" flex grid grid-cols-2 gap-4 items-center  md:grid-cols-2 ">
                  {/* /start div */}
                  <div class="flex-1  w-full h-full mx-auto max-w-7xl py-4 sm:px-6 lg:px-10 shadow shadow-lime-700/40 hover:bg-gray-100">
                    <p class="flex items-center justify-center md:justify-start mb-2">
                      <FaHome className="mr-2 animate-bounce" />
                      <h3>Direccion:</h3>
                    </p>
                    <p>CALLE 23 9 A 56, SOGAMOSO, BOYACA</p>
                  </div>

                  {/* /end div */}
                  <div class="flex-1  w-full h-full mx-auto max-w-7xl py-4 sm:px-6 lg:px-10 shadow shadow-lime-700/40 hover:bg-gray-100">
                    <p class="flex items-center justify-center md:justify-start mb-2">
                      <FiMail className="mr-2 animate-bounce" />
                      <h3> Correo: </h3>
                    </p>
                    <p class="">ceibasolsas@gmail.com</p>
                  </div>

                  <div class="flex-1  w-full h-full mx-auto max-w-7xl py-4 sm:px-6 lg:px-10 shadow shadow-lime-700/40 hover:bg-gray-100">
                    <p class="flex items-center justify-center md:justify-start mb-2">
                      <FiPhone className="mr-2 animate-bounce" />
                      <h3> Telefono: </h3>
                    </p>
                    <p>3102741994</p>
                  </div>

                  <div class="flex-1  w-full mx-auto max-w-7xl py-4 sm:px-6 lg:px-10 shadow shadow-lime-700/40 hover:bg-gray-100">
                    <p class="flex items-center justify-center md:justify-start mb-2">
                      <FiClock className="mr-2 animate-bounce" />
                      <h3> Horarios de atencion </h3>
                    </p>
                    <p>----------------------</p>
                  </div>
                </div>
              </div>
              <h1 class="">Buscanos en:</h1>
            </div>
          </div>
          {/* /End replace */}
        </div>
        <br></br>
        <div>
          <div class="relative max-w-2xl rounded-lg rounded-[12px] border border-gray-400 bg-white py-5 px-5 m-auto w-full hover:bg-slate-100">
            {windowEmergente ? (
              <div class="absolute inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div
                  data-aos="zoom-in"
                  class="absolute inset-0 flex justify-center items-center"
                >
                  <div class="bg-white p-4 rounded-lg rounded-[12px] shadow-lg">
                    <h2 class="text-xl font-semibold mb-4">
                      Envio del correo electronico
                    </h2>
                    <p class="mb-4">{mensajeEmergente}</p>
                    <button
                      class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 "
                      onClick={() =>
                        setWindowEmergente(false) ||
                        setLoading(false) ||
                        cleanFields()
                      }
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div class="text-3xl mb-8 text-center "><strong>Habla con nosotros</strong></div>

            <div class=" gap-4 max-w-xl m-auto ">
              <div class="col-span-2 lg:col-span-1 mt-2">
                <input
                  type="text"
                  value={nombre}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div class="col-span-2 lg:col-span-1 mt-2">
                <input
                  type="text"
                  value={correo}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                  placeholder="Direccion email"
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div class="col-span-2 lg:col-span-1 mt-2">
                <input
                  type="text"
                  value={telefono}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                  placeholder="Telefono"
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div class="col-span-2 lg:col-span-1 mt-2">
                <input
                  type="text"
                  value={asunto}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                  placeholder="Asunto"
                  onChange={(e) => setAsunto(e.target.value)}
                />
              </div>

              <div class="col-span-2 mt-8">
                <textarea
                  cols="30"
                  rows="8"
                  value={mensaje}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                  placeholder="Mensaje"
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              <div class="col-span-2 text-right mt-4">
                {loading ? (
                  <button
                    type="button"
                    class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                    onClick={() => enviarCorreo()}
                  >
                    <div class="animate-spin">
                      <AiOutlineLoading></AiOutlineLoading>
                    </div>
                    <div class="ml-4">Enviando...</div>
                  </button>
                ) : (
                  <button
                    type="button"
                    class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                    onClick={() => enviarCorreo()}
                  >
                    <MdOutlineMarkEmailRead></MdOutlineMarkEmailRead>
                    <div class="ml-4">Enviar Correo</div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </main>
    </div>
  );
}
