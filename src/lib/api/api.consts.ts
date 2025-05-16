import axios from "axios";

export const API_CONFIG = {
    Url :'http://localhost:3001'
}
export const instanceAxios = axios.create({
  // baseURL: process.env.CLIENT_API_URL,
    baseURL:API_CONFIG.Url,
    timeout: 30000,
    withCredentials: true,
    headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
});
