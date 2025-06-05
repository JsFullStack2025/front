
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/Context/AppContext";
import { useGetCookies, useSetCookie, useHasCookie, useDeleteCookie, useGetCookie } from 'cookies-next';
// import { getCookie, getCookies, setCookie, hasCookie } from 'cookies-next';


export default function Header() {
  const appContext = useContext(AppContext);
  //const getCookies = useGetCookies();
  const deleteCookie = useDeleteCookie();

  function logout() {

    deleteCookie("auth-cookie")
    deleteCookie("id")
    appContext.setCurrentUser(null)
   // appContext.setIsLoggedIn(false)
  }
  return (
    // <div className="gap-2 flex items-center justify-between absolute inset-x-0 top-4 hide-on-small-height " >
    <div className="flex items-center justify-between hide-on-small-height, top-2 ">

      <div className="pl-15">
        <Button variant="customSecondary">
          <Link href="/"><p className="text-center text-balance text-transparent font-jet bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
            VISITEO</p></Link>
        </Button>
      </div>
      <div className="pr-15">
        <div className="flex items-center gap-2 hover:cursor-pointer" >
          <Link href="/pages/userprofile" ><Avatar >

            <AvatarImage src={appContext.currentUser?.foto?appContext.currentUser?.foto:'/img/userprofile/nofoto.svg'} alt="Avatar" />
            {/* <AvatarFallback>CN</AvatarFallback> */}

          </Avatar></Link>
          <Button variant="customSecondary" onClick={appContext.currentUser?logout:undefined} >
            <Link href="/login">
              <p className="font-jet text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                {appContext.currentUser ? "Выйти" : "Вход"}</p></Link>
          </Button>

          {/* <Button variant="customSecondary">
            <Link href="/login">
              <p className="font-jet text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                Войти</p></Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}