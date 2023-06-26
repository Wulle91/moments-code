import axios from "axios";

axios.defaults.baseURL = "https://again-moments-d2bdd3c5ef83.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
