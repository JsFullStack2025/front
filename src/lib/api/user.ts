export async function GetUsers(){
  const res = await fetch( `${process.env.API_URL}/user`, {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: { 'Accept': 'application/json', 'content-type': 'application/json', },
  })
  const data = await res.json()
  //console.log(res)
  return data
}

export async function GetUser(id: number){
  const res = await fetch( `${process.env.API_URL}/user${id}`, {
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

export async function AxiosUpdateUser(user:UpdateUserDto) {
  const response: any = await AxiosShell(instanceAxios.patch('/user', user, {
   // withCredentials: true,
    headers: {

    }
}))
   return response.data
}

export async function AxiosGetUserCards(id: number) {

   const response: any = await AxiosShell(instanceAxios.get(`/user${id}/cards`))
   return response.data


}
