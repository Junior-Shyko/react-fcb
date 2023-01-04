import axios from "axios";

export const urlBaseApi = 'http://172.17.140.29:38000/api/v1';
export const urlBase = 'http://172.17.140.29:38000/';
export const api = axios.create({
    // ONLINE
    // baseURL: "http://159.203.69.144:38000/api/v1/",
    baseURL: 'http://172.17.140.29:38000/api/v1/',
});

//Para saber informações sobre o usuario
export async function getUserData(){
    //Obtendo o token na sessão
    const token = window.sessionStorage.getItem('user');
    //Gerando objeto para enviar na requisição
    let obj = {
        token_access: token
    };
    const response = await axios.post(urlBaseApi + "/me", obj,{
        headers: {
        'Authorization': `bearer ${token}`
        }
    })
    return await response;
}
