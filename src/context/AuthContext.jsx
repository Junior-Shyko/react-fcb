import { createContext, useState, useEffect} from "react";
import { useNavigate  } from "react-router-dom";
import { api } from "../services/Api";
import { getUser } from "./../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //armazena usuario logado
  const [user, setUser] = useState(null);
  const [ token, setToken ] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  //metodo para login
  // funcao assincrona
  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });
      console.log(response.data)
      setToken(response.data.access_token)
      // api.defaults.headers.common[
      //         "Authorization"
      //       ] = `Bearer ${token}`;

     getUser(response.data.access_token)
     .then((res) => {
      console.log({res})
      setUser(res.data)
      localStorage.setItem("@Auth:user", JSON.stringify(res.data));
      localStorage.setItem("@Auth:token", response.data.access_token);
      navigate('dashboard')
     })
     .catch((err) => {
      console.log({err})
     })

    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const singOut = () => {
    localStorage.clear();
    setUser(null);   
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        singOut,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};