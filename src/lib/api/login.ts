import { API_CONFIG } from '@/lib/api/api.consts'
export default async function login(username: string, password: string) {
  const res = await fetch(API_CONFIG.Url+"/auth/login", {
    cache: 'no-store',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include', // Разрешаем отправку куки
  })

  if (!res.ok) {
    console.log("error", res.status)
    //throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res;
}
