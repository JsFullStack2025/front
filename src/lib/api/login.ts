import { API_CONFIG } from '@/lib/api/api.consts'
export default async function login(email: string, password: string, capcha: string) {

  const res = await fetch(`${process.env.API_URL}/auth/login`, {
    cache: 'no-store',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "recaptcha": capcha
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
