import { API_CONFIG } from "./api.consts"

export async function GetUsers(){
  const res = await fetch(API_CONFIG.Url + "/user", {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: {'Accept': 'application/json', 'content-type': 'application/json', },
  })
  const data = await res.json()
  //console.log(res)
  return data
}

export async function GetUser(id: number){
  const res = await fetch(API_CONFIG.Url + "/user" + id, {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: {'Accept': 'application/json', 'content-type': 'application/json', },
  })
  return res.json()
}