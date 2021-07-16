import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'
import{useHistory} from "react-router-dom";
import { getNcheckLocalStorage } from '../Utils/Utils';


export const AuthContext = createContext(null)
export const AuthProvider=(props) => {
   const [user, setUser] = useState((getNcheckLocalStorage('user')))
   const [token, setToken] = useState(getNcheckLocalStorage('token'))
   const [users, setUsers] = useState([])
   const [aUser, setAUser] = useState([])
   const [loginError, setLoginError] = useState (false)
   const [checkEmail, setCheckEmail] = useState (false)
   const {push} = useHistory()
   

   useEffect(()=> {
      axios.defaults.headers.common["Authorization"]= 'Bearer ' + token
   },[user, token])

   const login = (body) => {
      setLoginError(false)
      axios.post('/auth/login', body).then(res => {
         if(res.data === 'bad credentials'){
            setLoginError(true)
         }
         localStorage.setItem("token", res.data.token)
         localStorage.setItem("user", JSON.stringify(res.data.user))
         setToken(res.data.token)
         setUser(res.data.user)
         push('/portal')
      })
      .catch((error) => {
         console.log(error)
      })
   }
   const register = (body) => {
      axios.post('/auth/register', body).then(res => {
         push('/portal')
      })
      .catch((err) => console.log(err))
   }
   const updateToken = () => {
      axios.get('/auth/updateToken').then(res => {
         localStorage.setItem("token", res.data.token)
         localStorage.setItem("user", JSON.stringify(res.data.user))
         setToken(res.data.token)
         setUser(res.data.user)
      })
      .catch((err) => console.log(err))
   }

   const logout = () => {
      axios.post('/auth/logout', '').then(res =>{
         setUser(null)
         localStorage.removeItem('token')
         localStorage.removeItem('user')
         window.close()
         push('/')
      })
      .catch((err) => {
         setUser(null)
         localStorage.removeItem('token')
         localStorage.removeItem('user')
         push('/')
         console.log(err)
      })
   }

   // const getUsers = () =>{
   //    axios
   //    .get("/api/users")
   //    .then((res) => {
   //       setUsers(res.data)
   //    })
   //       .catch(() => console.log("there was an error"))
   // }

   // const getUser = (USER_NUMBER) => {
   //    // console.log(user_id, "context")
   //    return axios
   //    .get(`/api/user/${USER_NUMBER}`)
   //    .then((res) => {
   //       setAUser(res.data)
   //       return res.data
   //    }) 
   //    .catch(() => console.log("there was an error"))
   //    // console.log(aUser, "auth context")
   // }

   // const deleteUser = (user_id) => {
   //    axios
   //    .delete(`/api/auth/${user_id}`)
   //    .then((res) => {
   //       push('portal/Users')
   //    })
   //    .catch(() => console.log("there was an error"))
   //    }

   // const editUser = (user_id, body) => {
   //    axios
   //       .put(`/api/user/${user_id}`, body)
   //       .then((res) => {
   //          push('portal/Users')
   //       })
   //       .catch(() => console.log("there was an error"))
   // }

   // const forgotPassword = (EMAIL) => {
   //    axios
   //    .post(`/api/forgotPassword/${EMAIL}`)
   //    .then((res) => {
   //       setCheckEmail(true)
   //       // push('/')
   //    })
   //    .catch(() => console.log("there was an error"))
   //    }

   // const resetPassword = (body) => {
   //    axios.post('/api/resetPassword', body)
   //    .then(res => {
   //       localStorage.setItem("token", res.data.token)
   //       localStorage.setItem("user", JSON.stringify(res.data.user))
   //       setToken(res.data.token)
   //       setUser(res.data.user)
   //       push('/portal')
   //    })
   //    .catch((err) => console.log(err))
   // }

         
   return(
      <AuthContext.Provider value={{
         // updateToken, 
         // user, 
         // users,
         // aUser,
         // getUser, 
         // getUsers, 
         // deleteUser, 
         // editUser, 
         // setUser, 
         login,
         loginError,
         register, 
         logout,
         // forgotPassword,
         // resetPassword,
         // checkEmail
      }}>
         {props.children}
      </AuthContext.Provider>
   )
}