import axios from "axios";

// export const urlBase = 'http://localhost/api/v1';
export const api = axios.create({
    baseURL: "http://172.18.125.24:38000/api/v1/",
});
