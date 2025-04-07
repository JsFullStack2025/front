"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"

import login from "@/shared/api/login"

import { formSchema } from "./validation"

export default function Login() {
	const form = useForm({
		defaultValues: {
			username: "",
			password: ""
		},
		resolver: zodResolver(formSchema)
	})
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const res = await login(data.username, data.password)
		if (res.status === 201) {
			const data = await res.json()
			console.log(data)
			window.location.href = "/userprofile/" + data.user.id //роутинг на страницу пользователя
		} else {
			console.log("error", res.status)
		}
	}

	return (
		<div className="flex items-center justify-center">
			<Card className="w-sm">
				<Tabs defaultValue="login" className="w-full">
					<CardHeader>
						<TabsList className="w-full">
							<TabsTrigger value="login">Вход</TabsTrigger>
							<TabsTrigger value="register">Регистрация</TabsTrigger>
						</TabsList>
					</CardHeader>
					<CardContent>
						<TabsContent value="login" className="space-y-4">
							<Form {...form}>
								<div>
									<p className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
										Вход в аккаунт
									</p>
									<p className="text-muted-foreground text-center text-sm">
										Введите данные для входа в свой аккаунт
									</p>
								</div>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-muted-foreground text-sm">
													Электронная почта
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														placeholder="example@mail.ru"
														{...field}
													/>
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
												<FormLabel className="text-muted-foreground text-sm">
													Пароль
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														type="password"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="flex flex-col gap-2">
										<Link href="/">
											<div className="mb-1 text-right">
												<div className="relative inline-block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-xs text-transparent">
													Забыли пароль?
													<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
												</div>
											</div>
										</Link>
										<Button
											type="submit"
											variant="customGradient"
											size="customLg"
										>
											Войти
										</Button>
									</div>
								</form>
							</Form>
						</TabsContent>
						<TabsContent value="register" className="space-y-4">
							<Form {...form}>
								<div>
									<p className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
										Регистрация
									</p>
									<p className="text-muted-foreground text-center text-sm">
										Введите данные для создания аккаунта
									</p>
								</div>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-muted-foreground text-sm">
													Электронная почта
												</FormLabel>
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
												<FormLabel className="text-muted-foreground text-sm">
													Пароль
												</FormLabel>
												<FormControl>
													<Input type="password" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="flex flex-col gap-2">
										<div className="mb-1 text-right text-transparent">x</div>
										<Button
											type="submit"
											variant="customGradient"
											size="customLg"
										>
											Зарегистрироваться
										</Button>
									</div>
								</form>
							</Form>
						</TabsContent>
					</CardContent>
				</Tabs>
				<div className="flex flex-col gap-4 pr-6 pl-6">
					<div className="flex items-center justify-center gap-4">
						<div className="h-[1px] w-full bg-gray-300"></div>
						<div className="w-full bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-sm font-medium whitespace-nowrap text-transparent">
							Или войти через
						</div>
						<div className="h-[1px] w-full bg-gray-300"></div>
					</div>
					<div className="flex flex-col items-center justify-center gap-4">
						<Button variant="outline" size="customLg">
							<Image
								src="/LogosYandexRu.svg"
								alt="yandex logo"
								width={50}
								height={40}
							/>
						</Button>
						<Button variant="outline" size="customLg">
							<Image
								src="/github-mark.svg"
								alt="github logo"
								width={25}
								height={25}
							/>
							GitHub
						</Button>
						<div className="flex w-full flex-col space-y-0">
							<p className="text-muted-foreground text-left text-xs">
								Создавая аккаунт, вы соглашаетесь с нашими
							</p>
							<Link
								className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-left text-xs text-transparent"
								href={"/"}
							>
								{" "}
								условиями использования
								<p className="bottom-0 left-0 h-[1px] w-37 bg-gradient-to-r from-purple-500 to-blue-500"></p>
							</Link>
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}
