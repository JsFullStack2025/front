import  {Button}  from "@/components/ui/button"
import Link from "next/link"
export default function Header() {
  return (
    <div className="gap-2 flex items-center justify-between absolute inset-x-0 top-4 hide-on-small-height " >
      <div className="pl-15">
        <Button variant="customSecondary">
          <Link href="/">VISITEO</Link>
        </Button>
      </div>
      <div className="pr-15">
        <Button variant="customSecondary">
          <Link href="/login">Войти/Профиль</Link>
        </Button>
      </div>
    </div>    
  )
}