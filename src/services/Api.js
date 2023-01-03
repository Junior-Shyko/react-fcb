import axios from "axios";

// export const urlBase = 'http://localhost/api/v1';
export const api = axios.create({
    baseURL: "http://159.203.69.144:38000/api/v1/",
});
