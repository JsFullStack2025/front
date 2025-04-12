//"use client";
'use server'
import Image from "next/image";
//import { useRef, useState } from "react";
//import "./stylePageUP.css";
import { Save, Plus, Pencil, Trash2, Mail, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
//import { useForm } from "react-hook-form";
//import { any, z } from "zod";
/*
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
 */
//import { Input } from "@/components/ui/input";
//import { title } from "process";
import { cards, users } from "./data";

import UserCard from "@/components/moduls/userCard";

import { GetUser } from "@/lib/api/user";

import {user} from "@/interfaces/api"

/*
const formSchema = z.object({
    useremail: z.string().email({
        message: "Некорректный email",
    }),
});
*/
/*
type Props = {
    params: {
        slug: number
    }
}
*/

export default async function UserProfile({ params }: { params: { slug: number } }) {
  
    const id =  (await params).slug;
    //const user = await GetUser(id);
    //console.log(user);

    const listCard = cards.map((card) => (
        <li className="flex flex-row items-center justify-between" key={card.id}>
            <button className="">
                <Trash2 />
            </button>
            <span className="mx-5 grow hover:cursor-pointer hover:underline">
                {card.title}
            </span>
            <button className="">
                <Pencil size={24} />
                {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
            </button>
        </li>
    ));
    //let curUser = users[0];
    //  const curUrlFoto = curUser.linkImg?` bg-indigo-300`: 'bg-[url(/img/userprofile/nofoto.svg)]  bg-indigo-300 '

    return (
        <div className="flex h-[100%] w-full flex-col items-center justify-between gap-8 px-8 lg:flex-row">
            <div>
                <UserCard id={ id } />
            </div>

            <div className="w-full overflow-y-auto rounded-lg bg-white text-gray-800 lg:h-4/5 lg:min-w-sm">
                <div className="bg-header-project-list flex h-15 items-center justify-between rounded-t-lg px-8">
                    <h2 className="text-xl text-white">Проекты</h2>
                    <Button className="bg-gradient">
                        {" "}
                        <Plus className="size-7" />
                        <span>Новый проект</span>
                    </Button>
                    {/* <Button className="bg-gradient"> <Image src="/img/UserProfile/plusicon.svg" alt="github logo" width={25} height={25} /><span>Новый проект</span></Button> */}
                    {/* <button className="bg-gradient text-white py-1 px-3  rounded-md"><svg className="icon-button" width="27"
                                height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3994 5V19M5.58301 12H21.2158" stroke="#F3F3F3" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Новый проект
                        </button> */}
                </div>
                <ul className="p-6">{listCard}</ul>
            </div>
        </div>
    );
}
