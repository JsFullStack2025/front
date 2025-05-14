import {createContext} from "react"
import {User} from '@/app/userprofile/types'
export const AppContext = createContext({
    user: new User(1, "UserLogin1", "", "pochta@pochta.ru" )
})