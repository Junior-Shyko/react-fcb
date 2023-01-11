import React, {createContext, useState} from 'react'
import { api } from 'services/Api'

//Função que constroe o Provider e também permite Consumir os Dados Globais
export const AuthContext = createContext()

export const SignInProvider = ({children}) => {
       const [ auth, setAuth ] = useState('')
       const [  user, setUser ] = useState([])
        const [ token, setToken] = useState('');
        const LoginAuth = (data) => {
            api.post('login', data)
            .then((res) => {
              console.log({res})
            //   setAuth(true)
              sessionStorage.setItem('token' , res.data.access_token)
              setToken(res.data.access_token);
              // window.location.href = api.urlBase + 'bashboard';
            })
            .catch((err) => {
              console.log(err)
            //   enqueueSnackbar(err.response.data.message,{ 
            //     autoHideDuration: 4500,
            //     variant: 'error',
            //     TransitionComponent: Grow,
            //     anchorOrigin: {
            //       horizontal: 'center',
            //       vertical: 'bottom'
            //     }
            //   });
            })
            //GET DE DADOS DO USUARIO
            api.get('me')
            .then((res) => {
                console.log('me response ', res)
              api.defaults.headers.authorization = `Bearer ${token}`;
            })
            .catch((err) => {
                console.log('me' , err)
            })
        }
        return (    
            <AuthContext.Provider value={{auth, setAuth, user, setUser, signIn: LoginAuth}}>
              {children}
            </AuthContext.Provider>
          )
      };
//Componente Provider para passar os valores para os Childrens

// export default AuthProvider