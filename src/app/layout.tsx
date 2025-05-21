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
import { useGetCookies, useSetCookie, useHasCookie, useDeleteCookie, useGetCookie } from 'cookies-next';



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
  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-primary-from to-primary-to font-sans h-screen `}
      >

        <AppContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading, error, setError }}>

          {loading &&<div className="flex w-[100%] h-full items-center justify-center absolute opacity-40 bg-white"><Spinner /></div>}
          {error &&<div className="p-3"> <ErrorMessage  error={error} /></div>}
           <header className="py-4 ">
            <Header />

          </header>
          <main className="">
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