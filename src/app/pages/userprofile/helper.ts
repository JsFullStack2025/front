import { cookies } from "next/headers"

export async function getUserIdFromCookie ():Promise<number> {
    let userAuth = (await cookies()).get("auth-cookie")?.value
    
  const UserId:number = JSON.parse(userAuth?.replace("j:","") || '[]').userId
  console.log("userID", UserId)
  return UserId
}
