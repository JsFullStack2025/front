import axios, { AxiosError, AxiosResponse } from "axios"
import { API_CONFIG, instanceAxios } from "./api.consts"

export async function GetUsers() {
  const res = await fetch(process.env.BACKEND_URI + "/user", {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: { 'Accept': 'application/json', 'content-type': 'application/json', },
  })
  const data = await res.json()
  //console.log(res)
  return data
}

export async function GetUser(id: number) {
  const res = await fetch(API_CONFIG.Url + "/user" + id, {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: { 'Accept': 'application/json', 'content-type': 'application/json', },
  })
  return res.json()
}

export async function AxiosGetUserById(id: number) {

   const response: any = await AxiosShell(instanceAxios.get('/user' + id))
   return response.data


}

export async function AxiosUpdateUser(data:any) {
  const response: any = await AxiosShell(instanceAxios.patch('/user', data))
   return response.data
}

async function AxiosShell(response: Promise<AxiosResponse<any, any>>) {
try {
    const res = await response
    console.log("AxiosShell_res", res)
    return res

  } catch (error) {
    console.error(error);
    let message = ""
    if (error instanceof AxiosError && error.response?.data) {
      message = JSON.stringify(error.response?.data) ?? "Unknown error"

    } else {
      message = error instanceof Error ? error.message : "Unknown error"
    }
    throw message
  }
}