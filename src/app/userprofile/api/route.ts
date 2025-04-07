export async function GET() {
  const res = await fetch(process.env.BACKEND_URI + "/user/${slug}", {
    cache: 'no-store',
    method: "GET",
    credentials: 'include', // Браузер автоматически добавит куки
    headers: { 'Accept': 'application/json', 'content-type': 'application/json', },
  })
  return res.json()
}
