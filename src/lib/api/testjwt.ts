export default async function testJWT() {
  const res = await fetch("http://localhost:3000/auth/testjwt", {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: {'Accept': 'application/json', 'content-type': 'application/json', },
  })
  const data = await res.json()
  if (!res.ok) {  // Если ответ не 200, то выбрасываем ошибку
    throw new Error(data.message || 'Failed to fetch data')
  }
  return data;
}

