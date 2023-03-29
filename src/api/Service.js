import { api, getResponseData } from "./index";

export default class ServiceApi {

    static newService(data) {

        const newServiceData = {
            nameService: data.nameService,
            subService: data.subService,
            linkImg: data.linkImg,
        };
        return api
            .post("services/crearServicio", newServiceData)
            .then(getResponseData);
    }
    static listServices() {
            return api
            .get("services/listarServicios")
            .then(getResponseData);
    }
}
