import UserProfile from "./page"
export default async function UserLayout({
    children, params
  }: {
    children: React.ReactNode
    params: Promise<{ user: string }>
  }) {
    const id:any = ((await params) as any).user;
    return  <UserProfile id={id} />
  }