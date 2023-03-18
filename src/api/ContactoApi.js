import { api, getResponseData } from "./index";

export default class ContactoApi {
    // ENVIO LA DATA AL BACK

    //inicio de sesion
  static enviarCorreo(data) {
    
    const correoData = {
        
      correoDestino: data.correoDestino,
      asunto: data.asunto,
      mensaje:data.mensaje
    };
    return api
      .post("contact/enviarCorreo", correoData)
      .then(getResponseData)
  }
}
