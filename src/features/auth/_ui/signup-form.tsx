"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"

import { Button } from "@/shared/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"

import { SignUpSchema, signupSchema } from "../_schemas/signup.schema"

import { AuthFormWrapper } from "./auth-form-wrapper"

export function SignUpForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<SignUpSchema>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	})

	const onSubmit = (data: SignUpSchema) => {
		if (recaptchaValue) {
			console.log(data)
		}
	}

	return (
		<AuthFormWrapper
			heading="Регистрация"
			description="Введите ваш email и пароль для регистрации"
			backButtonLabel="Уже есть аккаунт? Авторизуйтесь"
			backButtonHref="/signin"
			oauth
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="my-2 grid gap-4"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="email"
										autoComplete="email"
										autoCorrect="off"
										autoCapitalize="none"
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
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="password"
										autoComplete="password"
										autoCorrect="off"
										autoCapitalize="none"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Подтвердите пароль</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="password"
										autoComplete="password"
										autoCorrect="off"
										autoCapitalize="none"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-center">
						<ReCAPTCHA
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={setRecaptchaValue}
						/>
					</div>
					<Button disabled={!recaptchaValue} type="submit">
						Зарегистрироваться
					</Button>
				</form>
			</Form>
		</AuthFormWrapper>
	)
}
