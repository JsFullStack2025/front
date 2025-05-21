import UserProfile from "./page"
export default async function UserLayout({
    children, params
  }: {
    children: React.ReactNode
    params: { user: string }
  }) {
   const id:any = ((await params) as any).userid;
   return  <UserProfile id={id} />
  //  return  <UserProfile id={+params.user} />
  }