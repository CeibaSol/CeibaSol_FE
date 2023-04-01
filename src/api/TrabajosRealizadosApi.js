import { api, getResponseData } from "./index";

export default class TrabajosRealizadosApi {
  static newWork(data) {
    const newWorkData = {
      nameWork: data.nameWork,
      description: data.description,
      linkImg: data.linkImg,
    };
    return api.post("works/crearTrabajo", newWorkData).then(getResponseData);
  }
}
