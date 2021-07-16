import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Context/AuthContext';
import axios from 'axios'

// Add a response interceptor
export function IntializeAxios (){
   const {logout} = useContext(AuthContext)

   useEffect(() =>{
      axios.defaults.headers.common["Authorization"]= 'Bearer ' + getNcheckLocalStorage('token')
      
      axios.interceptors.response.use(function (response) {
         // Any status code that lie within the range of 2xx cause this function to trigger
         // Do something with response data
         return response;
      }, function (error) {
         if(
            error.config.url !== '/auth/login' &&
            error.config.url !== '/auth/logout'
         ){
            logout()
         }
         // Any status codes that falls outside the range of 2xx cause this function to trigger
         // Do something with response error
         return Promise.reject(error);
      });
   }, []);

   return null
}

export function getNcheckLocalStorage (localStorageKey){
   const localStorageValue = localStorage.getItem(localStorageKey)
   if(localStorageValue === 'undefined'){
      localStorage.removeItem(localStorageKey)
      return null
   } 
   if(!localStorageValue){
      return null
   }
   //reason for this is that localStorage always stores items as strings so if we have a javascript object then we want to parse it. If we have a regular string then we don't
   return localStorageValue.charAt(0)==='{' ? JSON.parse(localStorageValue) : localStorageValue;
}
