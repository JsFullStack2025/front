"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/moduls/footer";
import Header from "@/components/moduls/header";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/Context/AppContext";
import { ErrorMessage } from "./pages/userprofile/components/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";
//import { useGetCookies, useSetCookie, useHasCookie, useDeleteCookie, useGetCookie } from 'cookies-next';
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next/client';
import { AxiosGetUserById } from "@/lib/api/user";
import { usePathname } from "next/navigation";
import { getUserIdFromCookie } from "./pages/userprofile/helper";


const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["cyrillic"]
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const appContext = useContext(AppContext)
  // let [loggedUser, setLoggedUser] = useState(null);
  // let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  async function getUser(id: number) {
    setLoading(true);
    try {
      const response = await AxiosGetUserById(id)
      //  const response =  await GetUser(4)
      console.log("RootLayout_getUser", response);
      setCurrentUser(response)

    } catch (error: any) {
      setError(JSON.stringify(error))

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setError("")
    const authCookie = getCookie('auth-cookie')
    const userId = currentUser?.id||getUserIdFromCookie(authCookie);
       console.log("RootLayout", userId)
        userId&&!currentUser&&getUser(Number(userId))

  }, []);
//   let pathname = usePathname()
//  useEffect(() => {
//     if(isLoggedIn||currentUser||pathname =='/login'||pathname =='/') {
//       setLoading(false)

//     } else {
//        setLoading(true)
//     }

//   }, [isLoggedIn, currentUser, pathname]);
    // console.log(pathname!=='/login')
    //${isLoggedIn||currentUser||pathname =='/login'?'':'hidden'}
    //, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-gradient-to-r from-primary-from to-primary-to font-sans h-screen `}
      >

        <AppContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading, error, setError }}>

          {loading && <div className="flex w-[100%] h-full items-center justify-center absolute opacity-40 bg-white"><Spinner /></div>}


          <header className="py-4 ">
            <Header />
    {error && <div className="p-3"> <ErrorMessage error={error} /></div>}
          </header>
          <main className="m-h-[85vh]">
            {/* <CookiesProvider>{children}</CookiesProvider> */}
            {children}
          </main>
          <footer className="py-4">
            <Footer />
          </footer>


          {/* </CurrentUserContext.Provider> */}
        </AppContext.Provider>
      </body>

    </html>

  );
}