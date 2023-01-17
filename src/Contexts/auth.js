import { createContext, useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { api } from "./../services/Api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  
useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    const userAuth = sessionStorage.getItem("user");
    console.log({userToken})
    console.log({userAuth})

    // setUser(userAuth)

    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
//     const usersStorage = localStorage.getItem("users_bd");

//     if (userToken && usersStorage) {
//       const hasUser = JSON.parse(usersStorage)?.filter(
//         (user) => user.email === JSON.parse(userToken).email
//       );

//       if (hasUser) setUser(hasUser[0]);
//     }
 }, []);

  const signin = (token) => {
    console.log('signin token: ', token);
    // console.log('signin user: ', user);
    // // const [token, setToken] = useState();
   
    api.defaults.headers.authorization = `Bearer ${token}`;
    // api.post('me')
    // .then((res) => {
    //     console.log('me: ', res);
    //     const usersStorage = JSON.stringify(res.data);
    //     console.log(usersStorage)
    //     sessionStorage.setItem('token' , token)
    //     sessionStorage.setItem('user' , usersStorage)
    //     // localStorage.setItem("token", token);
    //     // localStorage.setItem("user", usersStorage);
    //     setUser(res.data)
       
    // })
    // .catch((err) => {
    //     console.log('error me: ', err)
    // });
    return {auth: true};
    // 

    // const hasUser = usersStorage?.filter((user) => user.email === email);

    // if (hasUser?.length) {
    //   if (hasUser[0].email === email && hasUser[0].password === password) {
    //     const token = Math.random().toString(36).substring(2);
    //     localStorage.setItem("user_token", JSON.stringify({ email, token }));
    //     setUser({ email, password });
    //     return;
    //   } else {
    //     return "E-mail ou senha incorretos";
    //   }
    // } else {
    //   return "Usuário não cadastrado";
    // }
  };

  const signup = (email, password) => {
    // const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    // const hasUser = usersStorage?.filter((user) => user.email === email);

    // if (hasUser?.length) {
    //   return "Já tem uma conta com esse E-mail";
    // }

    // let newUser;

    // if (usersStorage) {
    //   newUser = [...usersStorage, { email, password }];
    // } else {
    //   newUser = [{ email, password }];
    // }

    // localStorage.setItem("users_bd", JSON.stringify(newUser));

    // return;
  };

  const signout = () => {
    // setUser(null);
    console.log('signout auth.js')
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/authentication/sign-in")
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};