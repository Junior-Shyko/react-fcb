import axios from "axios";

export const urlBaseApi = process.env.REACT_APP_API_BASE_URL;
console.log({urlBaseApi})
export const urlBase = process.env.REACT_APP_BASE_URL;
console.log({urlBase})
export const api = axios.create({
    // ONLINE
    // baseURL: "http://159.203.69.144:38000/api/v1/",
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

//Para saber informações sobre o usuario
export async function getUserData(){
    //Obtendo o token na sessão
    const token = window.sessionStorage.getItem('user');
    //Gerando objeto para enviar na requisição
    let obj = {
        token_access: token
    };
    const response = await axios.post(urlBaseApi + "me", obj,{
        headers: {
        'Authorization': `bearer ${token}`
        }
    })
    return await response;
}
