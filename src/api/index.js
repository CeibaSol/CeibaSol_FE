import axios from "axios";

const apiBack = "http://localhost:5000/api/";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlBydWViYTEiLCJwYXNzd29yZCI6IiQyYSQxMCRBMTM4eXUzR1NVTkdXZllmSXVnSnVlc3lxV1hnUHVoV0UyOFJDblE3eEZ0cXhPNUJrRDVLcSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3ODMyMzEyNCwiZXhwIjoxNjc4MzIzNDI0fQ.pSdmCvPQS4vsWViiCV6t_6lAJePkEC4Q4laDlV3TOS8";

let header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export let api = axios.create({
  baseURL: apiBack,
  headers: header,
});

export const getResponseData = (resp) => resp.data;

export const escalateError = (err) => {
  console.error(err);
};
