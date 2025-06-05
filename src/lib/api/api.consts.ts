import axios, { AxiosError, AxiosResponse } from "axios";

export const API_CONFIG = {
    Url :'http://localhost:3001'
}
export const instanceAxios = axios.create({
  // baseURL: process.env.CLIENT_API_URL,
    baseURL:API_CONFIG.Url,
    timeout: 30000,
    withCredentials: true,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json; charset=UTF-8"
          }
});
export async function AxiosShell(response: Promise<AxiosResponse<any, any>>) {
try {
    const res = await response
    console.log("AxiosShell_res", res)
    return res

  } catch (error) {
    console.error(error);
    let message = ""
    if (error instanceof AxiosError && error.response?.data) {
      message = error.response?.data ?? "Unknown error"

    } else {
      message = error instanceof Error ? error.message : "Unknown error"
    }
    throw message
  }
}