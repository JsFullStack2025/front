import { Button } from "@/shared/ui/button";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex items-center justify-between hide-on-small-height, top-2 ">
      <div className="pl-15">
        <Button variant="customSecondary">
          <Link href="/"><p className="text-center text-balance text-transparent font-jet bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
            VISITEO</p></Link>
        </Button>
      </div>
      <div className="pr-15">
        <Button variant="customSecondary">
          <Link href="/login">
            <p className="font-jet text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
              Войти/Профиль</p></Link>
        </Button>
      </div>
    </div>
  );
}