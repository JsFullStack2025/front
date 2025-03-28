"use client"

import { useForm } from "react-hook-form"

import Link from "next/link"
import Image from 'next/image'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { formSchema } from "@/lib/validation"


export default function Login() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <div className="flex items-center justify-center ">
            <Card className="w-sm  ">
                <Tabs defaultValue="login" className="w-full">
                    <CardHeader>
                        <TabsList className="w-full ">
                            <TabsTrigger value="login">Вход</TabsTrigger>
                            <TabsTrigger value="register">Регистрация</TabsTrigger>
                        </TabsList>
                    </CardHeader>
                    <CardContent>
                        <TabsContent value="login" className="space-y-4">
                            <Form {...form} >
                                <div>
                                    <p className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">Вход в аккаунт</p>
                                    <p className="text-sm text-muted-foreground text-center">Введите данные для входа в свой аккаунт</p>
                                </div>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-muted-foreground">Электронная почта</FormLabel>
                                                <FormControl>
                                                    <Input className="w-full" placeholder="example@mail.ru" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-muted-foreground">Пароль</FormLabel>
                                                <FormControl>
                                                    <Input className="w-full" type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="gap-2 flex flex-col">
                                        <Link href="/">
                                            <div className="text-right mb-1">
                                                <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 relative inline-block">
                                                    Забыли пароль?
                                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Button type="submit" variant="customGradient" size="customLg">Войти</Button>
                                    </div>
                                </form>
                            </Form>
                        </TabsContent>
                        <TabsContent value="register" className="space-y-4">
                            <Form {...form}>
                                <div>
                                    <p className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">Регистрация</p>
                                    <p className="text-sm text-muted-foreground text-center">Введите данные для создания аккаунта</p>
                                </div>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-muted-foreground">Электронная почта</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="example@mail.ru" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-muted-foreground">Пароль</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="gap-2 flex flex-col">
                                        <div className="text-right mb-1 text-transparent">x</div>
                                        <Button type="submit" variant="customGradient" size="customLg">Зарегистрироваться</Button>
                                    </div>
                                </form>
                            </Form>
                        </TabsContent>
                    </CardContent>
                </Tabs>
                <div className="flex flex-col gap-4 pl-6 pr-6">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-full h-[1px]  bg-gray-300 "></div>
                        <div className="w-full text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-medium whitespace-nowrap">
                            Или войти через
                        </div>
                        <div className="w-full h-[1px]  bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Button variant="outline" size="customLg">
                            <Image src="/LogosYandexRu.svg" alt="yandex logo" width={50} height={40} /></Button>
                        <Button variant="outline" size="customLg">
                            <Image src="/github-mark.svg" alt="github logo" width={25} height={25} />GitHub
                        </Button>
                        <div className="space-y-0 flex flex-col w-full">
                            <p className="text-xs text-muted-foreground text-left">Создавая аккаунт, вы соглашаетесь с нашими</p>
                            <Link className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-left" href={"/"}> условиями использования
                                <p className=" bottom-0 left-0 w-37 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500"></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card >
        </div>
    );
}