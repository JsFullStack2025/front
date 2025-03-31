export default async function login(username: string, password: string) {
  const res = await fetch("http://localhost:3000/auth/login", {
    //mode: 'no-cors',
    cache: 'no-store',
    method: "POST",
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true','Accept': 'application/json', 'content-type': 'application/json', },
    body: JSON.stringify({ username, password }),
  })
  console.log(JSON.stringify({ username, password }))
  console.log(res.json())
  return res.json()
}