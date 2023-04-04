import ServiceApi from "../../../api/Service";

function App(props) {
    const { serviceId, deactivateAlert, refreshServices } = props;

    const handleDeleteService = () => {
        ServiceApi.deleteService(serviceId)
            .then(() => {
                alert("El Servicio fue Eliminado");
                refreshServices();
                deactivateAlert();
            })
            .catch(() => {
                alert("Lo sentimos... Algo salió mal :c")
            })
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50">
            <div className=" my-40 max-h-24">
                <div className="flex items-center justify-center">
                    <div className="bg-white w-4/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                        <div className="container mx-auto p-4">
                            <div
                                data-aos="flip-up"
                                className="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
                            >
                                <div className=" block p-2 ">
                                    <h5 className=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
                                        Eliminar Servicio
                                    </h5>
                                </div>
                            </div>
                            <br /><br />
                            <h1 class="text-base font-normal leading-tight text-gray-700">
                                <center>
                                    <strong>¿Está Seguro que desea eliminar este Servicio?</strong>
                                </center>
                            </h1>
                            <br /><br />
                            <center>
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={deactivateAlert}
                                >
                                    Cancelar
                                </button>
                                {" "}
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={() => handleDeleteService()}
                                >
                                    Si, Confirmar
                                </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;
