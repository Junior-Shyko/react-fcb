import axios from "axios";

// export const urlBase = 'http://localhost/api/v1';
export const api = axios.create({
    baseURL: "http://localhost/api/v1/",
});