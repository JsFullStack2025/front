"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import Link from "next/link"
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/ui/input-otp"

import { useSignInMutation } from "../_hooks/use-signin-mutation.hook"
import { SignInSchema, signinSchema } from "../_schemas/signin.schema"

import { AuthFormWrapper } from "./auth-form-wrapper"

export function SignInForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const [isShow2FA, setIsShow2FA] = useState(false)

	const form = useForm<SignInSchema>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})

	const { signIn, isPending } = useSignInMutation(setIsShow2FA)

	const onSubmit = (data: SignInSchema) => {
		if (recaptchaValue) {
			signIn({ data, captcha: recaptchaValue })
		}
	}

	return (
		<AuthFormWrapper
			heading="Авторизация"
			description="Введите ваш email и пароль для авторизации"
			backButtonLabel="Еще нет аккаунта? Зарегистрируйтесь"
			backButtonHref="/auth/signup"
			oauth
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="my-2 grid gap-4"
				>
					{!isShow2FA ? (
						<>
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
												disabled={isPending}
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
										<div className="flex items-center justify-between">
											<FormLabel>Пароль</FormLabel>
											<Link
												className="ml-auto inline-block text-sm underline"
												href="/auth/reset-password"
											>
												Забыли пароль?
											</Link>
										</div>

										<FormControl>
											<Input
												{...field}
												type="password"
												autoComplete="password"
												autoCorrect="off"
												autoCapitalize="none"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					) : (
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Код 2FA</FormLabel>

									<div className="flex justify-center">
										<FormControl>
											<InputOTP
												{...field}
												maxLength={6}
												pattern={REGEXP_ONLY_DIGITS}
												disabled={isPending}
											>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}
					<div className="flex justify-center">
						<ReCAPTCHA
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={setRecaptchaValue}
						/>
					</div>
					<Button disabled={!recaptchaValue || isPending} type="submit">
						{isPending ? "Вход в систему..." : "Авторизоваться"}
					</Button>
				</form>
			</Form>
		</AuthFormWrapper>
	)
}
