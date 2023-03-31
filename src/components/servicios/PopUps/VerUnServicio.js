import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ServiceApi from "../../../api/Service";

function ImageGrid(props) {
    const { serviceId } = props;
    const [service, setService] = useState([]);
    useEffect(() => {
        ServiceApi.getService(serviceId)
            .then((response) => {
                setService(response.servicio);
            })
    }, [serviceId]);
    return (
        <div className="max-h-4/6">
            <h4 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <center>
                    {service.nameService}
                </center>
            </h4>
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    {service.linkImg?.map((image, index) => (
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img src={image} alt={"image" + index} className="block object-cover object-center w-full h-48 rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="flex flex-wrap w-full p-4">
                <div role="list" class="space-y-5">
                    {service.subService?.map((subservice) => (
                        <li data-aos="fade-right" class="flex space-x-3">
                            <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700" />
                            <h1 class="text-base font-normal leading-tight text-gray-700">
                                <strong>{subservice}</strong>
                            </h1>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;