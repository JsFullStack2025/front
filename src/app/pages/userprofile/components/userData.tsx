
import Image from "next/image";
import { useRef, useState, useEffect, useContext } from "react";
import "../stylePageUP.css";
import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import DialogAvatarEdit from "../Dialogs/DialogAvatarEdit"
import { User } from "../types"
import { Spinner } from '@/components/ui/spinner';
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
import { AxiosUpdateUser } from "@/lib/api/user";
import { AppContext } from "@/app/Context/AppContext";
import { UpdateUserDto, userEntity } from "@/lib/api/entities/UserEntity";
//import { users } from "../data";
const formSchema = z.object({
    email: z.string().email({
        message: "Некорректный email",
    }),
});

export default function UserData({ curUser, setCurUser
}: {
    curUser: userEntity, setCurUser: any
}) {
    useEffect(() => {
        //setCurUser(curUser)
        form.setValue("email", curUser?.email);
    }, [curUser]);
    const appContext = useContext(AppContext);
    //let [curUser, setCurUser] = useState(userData);
    let [fotoHover, setfotoHover] = useState(false);
    let [fotoAvatar, setfotoAvatar] = useState("")
    let [dragClasses, setDragClasses] = useState("")
    // let [cardList, setCardList] = useState(cards || []); //вот так не работает. Почему так и непонял. Передал на мониторинг длины массива. Но это костыль как мне кажется.
    let [openDiagEditAvatar, setOpenDiagEditAvatar] = useState(false);
    const allowedTypes = ["image/png", "image/jpeg"]

    function saveAvatar(urlImg: string) {
        setfotoHover(false);
        setDragClasses("")
        curUser.foto = urlImg
        setCurUser(curUser)
    }

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        //var sendData = Object.assign(values, { id: curUser.id })

        var sendData =  Object.assign(values,{ id: curUser.id, foto: curUser.foto})
        console.log(sendData)
        try {
            appContext.setLoading(true);
             console.log("onSubmit", sendData);
            const result = await AxiosUpdateUser(sendData)

        } catch (msg) {
            appContext.setError(msg)
        } finally {
            appContext.setLoading(false);
        }

        // ✅ This will be type-safe and validated.
       // alert(JSON.stringify(sendData))

    }

    function fotoChanged(event: any) {
        console.log(event);
        const files: any[] = event.target.files;
        if (files.length > 0) {
            OpenDiagAvatar(files[0])
            //setCurUser(curUser)
            // console.log(files) ///img/userprofile/
            // alert(files[0].name);
        }
        // else {
        //     alert("No file chosen");
        // }
    }

    // let [openDel, setOpenDel] = useState(false);
    function fotoMouseOver(event: any) {
        setfotoHover(true);
        console.log("fotoHover", fotoHover);
    }
    function fotoMouseOut(evet: any) {
        setfotoHover(false);
        console.log("fotoHover", fotoHover);
    }

    function dropHandler(ev: any): void {
        console.log("File(s) dropped");

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file && allowedTypes.includes(file.type)) {
                        console.log(`… file[${i}].name = ${file.name}`);
                        OpenDiagAvatar(file)
                        return
                    }

                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                if (allowedTypes.includes(file.type)) {
                    console.log(`… file[${i}].name = ${file.name}`);
                    OpenDiagAvatar(file)
                    return
                }

            });
        }
    }
    function OpenDiagAvatar(file: File) {
        const src = URL.createObjectURL(file)
        setfotoAvatar(src)
        setOpenDiagEditAvatar(true)
    }
    function dragOverHandler(event: any): void {
        event.preventDefault();
        setDragClasses("") //что-то не нравиться мне эта рамка outline-2 outline-primary-from
        setfotoHover(true);
    }
    function dragLeaveHandler(event: any): void {
        setfotoHover(false);
        setDragClasses("")
    }

    return (
        <>
            <DialogAvatarEdit open={openDiagEditAvatar} setOpen={setOpenDiagEditAvatar} saveAvatar={saveAvatar} urlImg={fotoAvatar} />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex h-full flex-col space-y-8"
                >
                    <div className="mb-6">
                        <h2 className="text-center text-xl">Редактировать профиль</h2>
                    </div>

                    <div className="mb-6 flex items-center justify-start gap-4">
                        {/* <Camera size={60} /> */}
                        {/* <div
                                style={{'--image-url': `url(${fetchedUrl})`} as React.CSSProperties}
                                className='bg-[image:var(--image-url)]'>
                                    <!-- ... -->
                                </div> */}
                        <label
                            id="label-foto-user"
                            onMouseOver={fotoMouseOver}
                            onMouseOut={fotoMouseOut}
                            onDrop={dropHandler}
                            onDragOver={dragOverHandler}
                            onDragLeave={dragLeaveHandler}
                            style={
                                {
                                    "--image-url": `url(${curUser?.foto ? curUser.foto : "/img/userprofile/nofoto.svg"})`,
                                } as React.CSSProperties
                            }
                            htmlFor="userfoto"
                            className={`bg-[image:var(--image-url)] bg-cover ${!curUser?.foto && "bg-indigo-300"} ${dragClasses} relative size-[125] rounded-full border-indigo-300 hover:cursor-pointer`}
                        >
                            {/* <label id="label-foto-user"  htmlFor="userfoto" className={`hover:opacity-[0.5] ${!curUser.foto&&'bg-indigo-300'} relative size-[125] rounded-full  border-indigo-300 hover:cursor-pointer`}> */}
                            {/* {
                                    curUser.foto ?
                                    <Image
                                    className="rounded-full"
                                    src={curUser.foto}
                                    alt="Profile Picture"
                                    width={125}
                                    height={125}

                                    priority
                                /> :

                                    <Image
                                    className="rounded-full"
                                    src="/img/userprofile/nofoto.svg"
                                    alt="Profile Picture"
                                    width={125}
                                    height={125}

                                    priority
                                />
                                } */}

                            {/* <span className="bg-[url(/img/userprofile/editWhite.svg)] border-2 border-black  bg-center size-[25]  bg-black top-25 left-20  rounded-full absolute  "></span> */}
                            {fotoHover ? (
                                <span className="absolute top-25 left-20 flex size-[30] items-center justify-center rounded-full bg-black">
                                    <Image
                                        className=" "
                                        src="/img/userprofile/editWhite.svg"
                                        alt="Profile Picture"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                </span>
                            ) : (
                                <span className="absolute top-25 left-20 flex size-[30] items-center justify-center rounded-full bg-white">
                                    <Image
                                        className=" "
                                        src="/img/userprofile/edit.svg"
                                        alt="Profile Picture"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                </span>
                            )}
                        </label>
                        <input
                            type="file"
                            hidden
                            className="w-0"
                            id="userfoto"
                            onChange={fotoChanged}
                            name="userfoto"
                        ></input>

                        <div className="text-field">
                            <label htmlFor="name" className="block text-sm">
                                Имя пользователя:
                            </label>

                            <div className="text-gray-500">{curUser?.username ? curUser.username : ""}</div>
                        </div>
                    </div>

                    <div className="text-field mb-4">
                        {/* <label htmlFor="email" className="block text-sm">Электронная почта</label>
                                    <div className="text-field__icon text-field__icon_email">
                                        <input type="email" id="email" name="email" required
                                            className="w-full p-2 mt-2 rounded-lg text-field__input"
                                            placeholder="Введите электронную почту" />
                                    </div> */}

                        <FormField

                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Электронная почта</FormLabel> */}
                                    <label htmlFor="email" className="block text-sm">
                                        Электронная почта
                                    </label>
                                    <FormControl>
                                        <div className="text-field__icon text-field__icon_email">
                                            <Input

                                                className="text-field__input invalid:border-pink-500 invalid:text-pink-600"
                                                placeholder="Введите электронную почту"
                                                {...field}


                                            />
                                        </div>
                                    </FormControl>
                                    {/* <FormDescription>

                                                </FormDescription> */}
                                    <FormMessage className="text-[0.8rem]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex grow-1 items-end justify-end">
                        <Button type="submit" className="bg-gradient">
                            {" "}
                            <Save className="size-7" />
                            <span>Сохранить</span>
                        </Button>
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
        </>
    );
}
