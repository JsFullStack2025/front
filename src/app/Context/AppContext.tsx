"use client"
import { createContext } from "react"
export const AppContext = createContext({
    loggedUser: null,
    setLoggedUser:()=>{},
    isLoggedIn:false,
    setIsLoggedIn:()=>{},
    currentUser: null,
    setCurrentUser: (User: any) => { },
    loading: false,
    setLoading:(loading: any) => { },
    error: null,
    setError:(error:any)=>{}
} as any)
