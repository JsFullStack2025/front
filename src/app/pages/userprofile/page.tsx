"use client";
// import Image from "next/image";
import { useRef, useState, useEffect, useContext } from "react";
import { useParams } from 'next/navigation'
import "./stylePageUP.css";
//import { Save, Plus, Pencil, Trash2, Mail, Camera } from "lucide-react";
import { Card, User } from "./types"
import { Spinner } from '@/components/ui/spinner';
import UserData from './components/userData'
import ListUserProject from './components/listUserProject'
import { cards, users } from "./data";
import { AppContext } from "@/app/Context/AppContext";

import React from "react";
import axios from "axios";
import { API_CONFIG } from "@/lib/api/api.consts";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { AxiosGetUserById, AxiosGetUserCards, GetUser } from "@/lib/api/user";
import { CardEntity, CreateCardDto } from "@/lib/api/entities/CardEntity";
import { AxiosCreateCard, AxiosDeleteCard } from "@/lib/api/cards";
import { title } from "process";

//https://stackoverflow.com/questions/66988869/how-to-resolve-dynamic-routes-on-client-side-in-next-js-framework
//https://nextjs.org/docs/app/api-reference/functions/use-params
//https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
//https://blog.greenroots.info/shadcn-dialog-with-form-three-tips
export default function UserProfile({ id }: { id: any }) {

    const appContext = useContext(AppContext);
     let [cardList, setCardList] = useState([]);
    // const currentUserContext = useContext(CurrentUserContext);
    //    let [error, setError] = useState(appContext.error);
    async function getUser(id:number) {
        appContext.setLoading(true);
        try {
            const response = await AxiosGetUserById(id)
            //  const response =  await GetUser(4)
            console.log("getUser", response);
            appContext.setCurrentUser(response)

        } catch (error) {
            appContext.setError(error)

        } finally {
            appContext.setLoading(false);
        }
    }
    useEffect(() => {
        getUser(id)

    }, []);
     async function getUserCards(id:number) {
        appContext.setLoading(true);
        try {
            const cards = await AxiosGetUserCards(id)
            console.log("getUserCards", cards);
            setCardList(cards)

        } catch (error) {
            appContext.setError(error)

        } finally {
            appContext.setLoading(false);
        }
    }
    useEffect(() => {
        getUserCards(id)

    }, []);
    async function deleteCard (idCard:number) {
               try {
                   appContext.setLoading(true);
                    const res = await AxiosDeleteCard(idCard)
                    console.log("deleteCard", res);
                   // setCardList(cards)
                    getUserCards(id)
                } catch (error) {
                    appContext.setError(error)

                } finally {
                    appContext.setLoading(false);
                }
    }
     async function createCard (title:string) {
               try {
                   appContext.setLoading(true);
                   let card:CreateCardDto = {authorId:appContext.currentUser.id, title:title}
                    const res = await AxiosCreateCard(card)
                    console.log("createCard", res);
                   // setCardList(cards)
                    getUserCards(id)
                } catch (error) {
                    appContext.setError(error)

                } finally {
                    appContext.setLoading(false);
                }
    }
    // const appContext = useContext(AppContext)
    // useEffect(() => {
    //     //getUser(id)
    //     setCurUser(appContext.currentUser)
    // }, [appContext.currentUser]);
    // let [curUser, setCurUser] = useState(appContext.user || new User());

    // let [curUser, setCurUser] = useState(()=>users.find((elm) => elm.id == id) || new User());
    //  let [fotoHover, setfotoHover] = useState(false);
    //  let [cardListLength, setCardListLength] = useState(cards.length || [].length);
    //  let [linkImgAvatar, setLinkImgAvatar] = useState("")

    //  let [openDiagEditAvatar, setOpenDiagEditAvatar] = useState(false);
    //   let cardList: Card[] = cards || []
    //Вариант 1
    // const userId = useParams<{ userId: string; }>()
    // console.log("params", userId)
    //Вариант 2 получаем динамические параметры в layout.tsx
    // console.log(id)


    return (

        <div className="h-[85vh]">

            {/* <Spinner show={show} /> */}
            {/* <AppContext.Provider value={appContext}> */}
            <div className="flex h-full  w-full flex-col items-center justify-between gap-8 px-8 lg:flex-row">
                <div className="w-full overflow-y-auto rounded-lg bg-white p-6 text-gray-800 sm:min-w-sm lg:h-4/5 lg:w-1/3">

                    <UserData curUser={appContext.currentUser} setCurUser={appContext.setCurrentUser} />
                    {/* <UserData userData={curUser} /> */}
                    {/* < Button className="bg-gradient" onClick={()=>getUser(id)}>
                            {" "}
                            <Save className="size-7" />
                            <span>Обновить</span>
                        </Button> */}
                </div>

                <div className="w-full overflow-y-auto rounded-lg bg-white text-gray-800 lg:h-4/5 lg:min-w-sm">
                    <ListUserProject cardList={cardList} deleteCard={deleteCard} createCard={createCard} />
                </div>
                <div>


                </div>
            </div>
            {/* </AppContext.Provider> */}

        </div>

    );
}
