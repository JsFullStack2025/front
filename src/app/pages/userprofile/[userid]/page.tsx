"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import AvatarEditor from 'react-avatar-editor'
import { useParams } from 'next/navigation'
import "./stylePageUP.css";
import { Save, Plus, Pencil, Trash2, Mail, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import  DialogDel from "./Dialogs/DialogDel"
import  DialogNewCard from "./Dialogs/DialogNewCard"
import  DialogAvatarEdit from "./Dialogs/DialogAvatarEdit"
import { Card, User } from "./types"
import { Spinner } from '@/components/ui/spinner';
import UserData from './components/userData'
import ListUserProject from './components/listUserProject'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { title } from "process";
import { cards, users } from "./data";
const formSchema = z.object({
    useremail: z.string().email({
        message: "Некорректный email",
    }),
});
//https://stackoverflow.com/questions/66988869/how-to-resolve-dynamic-routes-on-client-side-in-next-js-framework
//https://nextjs.org/docs/app/api-reference/functions/use-params
//https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
//https://blog.greenroots.info/shadcn-dialog-with-form-three-tips
export default function UserProfile({ id
}: {
    id: number
}) {
    alert()
    let [curUser, setCurUser] = useState(()=>users.find((elm) => elm.id == id) || new User());
  //  let [fotoHover, setfotoHover] = useState(false);
  //  let [cardListLength, setCardListLength] = useState(cards.length || [].length);
  //  let [linkImgAvatar, setLinkImgAvatar] = useState("")
    // let [cardList, setCardList] = useState(cards || []); //вот так не работает. Почему так и непонял. Передал на мониторинг длины массива. Но это костыль как мне кажется.
  //  let [openDiagEditAvatar, setOpenDiagEditAvatar] = useState(false);
    let cardList = cards||[]
    //Вариант 1
    const userId = useParams<{ userId: string; }>()
    console.log("params", userId)

    //Вариант 2 получаем динамические параметры в layout.tsx
    console.log(id)


    return (
        <>
            {/* <Spinner show={show} /> */}
            <div className="flex h-[100%] w-full flex-col items-center justify-between gap-8 px-8 lg:flex-row">
                <div className="w-full overflow-y-auto rounded-lg bg-white p-6 text-gray-800 sm:min-w-sm lg:h-4/5 lg:w-1/3">
                <UserData userData={curUser} />
                </div>

                <div className="w-full overflow-y-auto rounded-lg bg-white text-gray-800 lg:h-4/5 lg:min-w-sm">
                <ListUserProject cardList={cardList}/>
                </div>

            </div>
        </>
    );
}
