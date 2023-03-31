import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceApi from "../../api/Service";
import SimpleService from "./SimpleService"
function ImageGrid() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        ServiceApi.listServices()
            .then((response) => {
                setServices(response.servicios);
            })
    }, []);
    return (
        <div>
            {services?.map((prop, key) => (
                <div className="px-4 py-6 sm:px-0 space-y-8">
                    <SimpleService
                        key={key}
                        serviceId={prop._id}
                        serviceTitle={prop.nameService}
                        images={prop.linkImg}
                        subServices={prop.subService} />
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;