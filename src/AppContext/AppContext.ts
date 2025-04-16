import { createContext, useContext } from "react";

export type UserData ={
    userId: number
}

export const UserContext = createContext<UserData>({userId:0});

export const useGlobalContext = ()=> useContext(UserContext);