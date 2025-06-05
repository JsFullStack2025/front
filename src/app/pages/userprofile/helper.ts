
export function getUserIdFromCookie (userAuth:string|undefined|null):number {
 if (userAuth) {
   return JSON.parse(userAuth?.replace("j:","") || '[]').userId
 }
  return 0
}
