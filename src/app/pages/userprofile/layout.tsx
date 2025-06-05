
import { AxiosGetUserById } from "@/lib/api/user"
import UserProfile from "./page"
import { cookies } from 'next/headers'
import { getUserIdFromCookie } from "./helper"

export default async function UserLayout({
  children, params
}: {
  children: React.ReactNode
  params: { user: string }
}) {
  //const id:any = ((await params) as any).userId;
  // const userId = await getUserIdFromCookie()
  // console.log("AuthCookies", userId)

  // return  <UserProfile id={id} />
  return <UserProfile/>
  //<UserProfile id={userId}/>
  //  return  <UserProfile id={+params.user} />
}