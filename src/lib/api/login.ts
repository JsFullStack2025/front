import { API_CONFIG } from '@/lib/api/api.consts'
export default async function login(email: string, password: string) {

  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + /*"http://localhost:3000*/"/auth/login", {
    cache: 'no-store',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include', // Разрешаем отправку куки
  })

  if (!res.ok) {
    console.log("error", res.status)
    //throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res;
}
