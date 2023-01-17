import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { api } from "services/Api";
import { AuthContext } from "../Contexts/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const getUser = async (token) => {
  console.log('getUser' , token)
  // let a;
  let auth = false;

  api.defaults.headers.authorization = `Bearer ${token}`;
  const res = await api.post('/me')

  return res

// console.log({auth})
// return auth;
}
/**
 *  console.log({res})
    const usersStorage = JSON.stringify(res.data);
    localStorage.setItem("@Auth:user", usersStorage);
    localStorage.setItem("@Auth:token", token);
    auth = true;
 */
