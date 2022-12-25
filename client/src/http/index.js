import axios from "axios"

const $host = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   withCredentials: false,
   //налаштування запитів axios
   headers: {
      // add_header'Access-Control-Allow-Origin''http://localhost:5000/'asways;
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '1728000',
      "Content-Type": "text/plain"
   }
})
const $authHost = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   withCredentials: false,
   headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '1728000',
      "Content-Type": "text/plain"
   }
})

const authInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
   return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
   $host,
   $authHost
}