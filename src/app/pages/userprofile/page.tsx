"use client"
import Image from "next/image";
import "./stylePageUP.css";
import { Save, Plus, Pencil, Trash2, Mail } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
    useremail: z.string().email({
        message: "Некорректный email",
    }),
})
export default function UserProfile() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            useremail: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        // <div className="">

        <div className="flex flex-col items-center lg:flex-row gap-8 justify-between px-8 h-[100%] w-full ">

            <div
                className=" bg-white text-gray-800 p-6 rounded-lg w-full lg:w-1/3 sm:min-w-sm lg:h-4/5  overflow-y-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full space-y-8">
                        <div className="mb-6 ">
                            <h2 className="text-xl text-center">Редактировать профиль</h2>

                        </div>
                        <div className="flex justify-center mb-6 gap-4 items-center ">

                            <Image className="w-32 h-32 rounded-full border-2 border-indigo-300" src="/img/foto.jpg"
                                alt="Profile Picture"
                                width={124}
                                height={124}
                                priority />
                            <div className="w-full text-field">
                                <label htmlFor="name" className="block text-sm">Имя пользователя:</label>

                                <div className="text-gray-500">
                                    @Erin_Lindford
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 text-field">



                            {/* <label htmlFor="email" className="block text-sm">Электронная почта</label>
                                    <div className="text-field__icon text-field__icon_email">
                                        <input type="email" id="email" name="email" required
                                            className="w-full p-2 mt-2 rounded-lg text-field__input"
                                            placeholder="Введите электронную почту" />
                                    </div> */}

                            <FormField
                                control={form.control}
                                name="useremail"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Электронная почта</FormLabel> */}
                                        <label htmlFor="useremail" className="block text-sm">Электронная почта</label>
                                        <FormControl>
                                            <div className="text-field__icon text-field__icon_email">
                                                <Input className="text-field__input invalid:border-pink-500 invalid:text-pink-600" placeholder="Введите электронную почту" {...field} />
                                            </div>
                                        </FormControl>
                                        {/* <FormDescription>

                                                </FormDescription> */}
                                        <FormMessage className="text-[0.8rem]" />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="flex flex-row items-end justify-end grow-1">
                            <Button type="submit" className="bg-gradient "> <Save className="size-7"  /><span>Сохранить</span></Button>
                            {/* </fieldset> */}

                            {/* <Button className="bg-gradient"> <Image src="/img/UserProfile/saveIcon.svg" alt="github logo" width={20} height={20} /><span>Сохранить</span></Button> */}
                            {/* <button className="bg-gradient text-white py-1 px-3  rounded-md ">
                            <svg className="icon-button" width="20" height="20"
                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.1667 17.5V10.8333H5.83333V17.5M5.83333 2.5V6.66667H12.5M15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333L17.5 6.66667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5Z"
                                    stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Сохранить</span>

                        </button> */}
                        </div>

                    </form>
                </Form>
            </div>


            <div className="bg-white text-gray-800 rounded-lg  w-full lg:h-4/5 lg:min-w-sm  overflow-y-auto">
                <div className="flex justify-between items-center rounded-t-lg  h-15 px-8 bg-header-project-list">
                    <h2 className="text-xl text-white">Проекты</h2>
                    <Button className="bg-gradient"> <Plus className="size-7" /><span>Новый проект</span></Button>
                    {/* <Button className="bg-gradient"> <Image src="/img/UserProfile/plusicon.svg" alt="github logo" width={25} height={25} /><span>Новый проект</span></Button> */}
                    {/* <button className="bg-gradient text-white py-1 px-3  rounded-md"><svg className="icon-button" width="27"
                                height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3994 5V19M5.58301 12H21.2158" stroke="#F3F3F3" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Новый проект
                        </button> */}

                </div>
                <ul className="p-6">
                    <li className="flex flex-row justify-between items-center">
                        <button className="">
                            <Trash2 />
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                                fill="#49454F" />
                                        </svg> */}
                        </button>
                        <span className="grow mx-5 hover:cursor-pointer hover:underline">Проект 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto iste consectetur fuga eligendi sed adipisci, eaque quidem! Nam, libero. Tempore perferendis architecto recusandae rem blanditiis unde doloribus laborum optio? .</span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                        <button className="">
                            <Trash2 />
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                                fill="#49454F" />
                                        </svg> */}
                        </button>
                        <span className="grow mx-5 hover:cursor-pointer hover:underline">Проект 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto iste consectetur fuga eligendi sed adipisci, eaque quidem! Nam, libero. Tempore perferendis architecto recusandae rem blanditiis unde doloribus laborum optio? .</span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                        <button className="">
                            <Trash2 />
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                                fill="#49454F" />
                                        </svg> */}
                        </button>
                        <span className="grow mx-5 hover:cursor-pointer hover:underline">Проект 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto iste consectetur fuga eligendi sed adipisci, eaque quidem! Nam, libero. Tempore perferendis architecto recusandae rem blanditiis unde doloribus laborum optio? .</span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                        <button className="">
                            <Trash2 />
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                                fill="#49454F" />
                                        </svg> */}
                        </button>
                        <span className="grow mx-5 hover:cursor-pointer hover:underline">Проект 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto iste consectetur fuga eligendi sed adipisci, eaque quidem! Nam, libero. Tempore perferendis architecto recusandae rem blanditiis unde doloribus laborum optio? .</span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                        <button className="">
                            <Trash2 />
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                                fill="#49454F" />
                                        </svg> */}
                        </button>
                        <span className="grow mx-5 hover:cursor-pointer hover:underline">Проект 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto iste consectetur fuga eligendi sed adipisci, eaque quidem! Nam, libero. Tempore perferendis architecto recusandae rem blanditiis unde doloribus laborum optio? .</span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                    {/*<li className="flex justify-between items-center ">
                        <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#49454F" />
                        </svg>
                        </button>
                        <span className="grow mx-5">Проект 2</span>
                        <button className="text-blue-500"> <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} />
                        </button>
                    </li>
                     <li className="flex justify-between items-center  ">
                        <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#49454F" />
                        </svg>
                        </button>
                        <span className="grow mx-5">Проект 3</span>
                        <button className="text-blue-500"> <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} />
                        </button>
                    </li>
                    <li className="flex justify-between items-center">
                        <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#49454F" />
                        </svg>
                        </button>
                        <span className="grow mx-5">Проект 4</span>
                        <button className="text-blue-500"> <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} />
                        </button>
                    </li>
                    <li className="flex justify-between items-center ">
                        <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#49454F" />
                        </svg>
                        </button>
                        <span className="grow mx-5">Проект 5</span>
                        <button className="text-blue-500"> <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} />
                        </button>
                    </li> */}

                </ul>
            </div>
        </div>

        // </div >
    );
}
