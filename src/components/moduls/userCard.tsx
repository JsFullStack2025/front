'use client'

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styles from "./userCard.module.css";
import { Save, Plus, Pencil, Trash2, Mail, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
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
//import {user} from "@/interfaces/api"

import { GetUser } from "@/lib/api/user";
import { user } from "@/interfaces/api"



const formSchema = z.object({
  useremail: z.string().email({
    message: "Некорректный email",
  }),
});

const emptyUser: user = {
  id: 0,
  email: "",
  username: "",
  isAdmin: false,
  first_name: "",
  middle_name: "",
  last_name: "",
  banned: false
}

export default function UserCard({ id }: { id: number }) {

  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    const fetchUser = async () => {

      const user: user = await GetUser(id);
      console.log(user);
      setUser(user);
    };
    console.log(user);
    fetchUser();
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useremail: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function fotoChanged(event: any) {
    console.log(event);
    const files: any[] = event.target.files;
    if (files.length > 0) {
      alert(files[0].name);
    } else {
      alert("No file chosen");
    }
  }
  let [fotoHover, setfotoHover] = useState(false);

  function fotoMouseOver(event: any) {
    setfotoHover((fotoHover = true));
    console.log("fotoHover", fotoHover);
  }
  function fotoMouseOut(evet: any) {
    setfotoHover((fotoHover = false));
    console.log("fotoHover", fotoHover);
  }
  return (
    <div className="w-full overflow-y-auto rounded-lg bg-white p-6 text-gray-800 sm:min-w-sm lg:h-4/5 lg:w-1/3">
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
              style={
                {
                  "--image-url": `url( "/public/foto.svg"})`, //`url(${user.linkImg ? user.linkImg : "/img/userprofile/nofoto.svg"})`,
                } as React.CSSProperties
              }
              htmlFor="userfoto"
              className={`bg-[image:var(--image-url)] bg-cover relative size-[125] rounded-full border-indigo-300 hover:cursor-pointer`} // ${!user.linkImg && "bg-indigo-300"}
            >
              {/* <label id="label-foto-user"  htmlFor="userfoto" className={`hover:opacity-[0.5] ${!curUser.linkImg&&'bg-indigo-300'} relative size-[125] rounded-full  border-indigo-300 hover:cursor-pointer`}> */}
              {/* {
                                    curUser.linkImg ?
                                    <Image
                                    className="rounded-full"
                                    src={curUser.linkImg}
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

              <div className="text-gray-500">{user == null ? emptyUser.first_name : user.first_name}</div>
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
              name="useremail"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Электронная почта</FormLabel> */}
                  <label htmlFor="useremail" className="block text-sm">
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
    </div>
  )
}