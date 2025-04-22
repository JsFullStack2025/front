import { API_CONFIG } from '@/lib/api/api.consts'
export default async function login(username: string, password: string) {
<<<<<<< HEAD
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + /*"http://localhost:3000*/"/auth/login", {
=======
  const res = await fetch(API_CONFIG.Url+"/auth/login", {
>>>>>>> 8104e5849fc14d45d03e2ab5913145a3f29defa2
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
