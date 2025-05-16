import { createContext } from "react"
export const AppContext = createContext({
    currentUser: null,
    setCurrentUser: (User: any) => { },
    loading: false,
    setLoading:(loading: any) => { },
    error: null,
    setError:(error:any)=>{}
} as any)
