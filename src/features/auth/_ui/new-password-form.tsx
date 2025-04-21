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

import { useNewPasswordMutation } from "../_hooks/use-new-password-mutation.hook"
import {
	NewPasswordSchema,
	newPasswordSchema
} from "../_schemas/new-password.schema"

import { AuthFormWrapper } from "./auth-form-wrapper"

export function NewPasswordForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<NewPasswordSchema>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: ""
		}
	})

	const { newPassword, isPending } = useNewPasswordMutation()

	const onSubmit = (data: NewPasswordSchema) => {
		if (recaptchaValue) {
			newPassword({ data, recaptcha: recaptchaValue })
		}
	}

	return (
		<AuthFormWrapper
			heading="Изменение пароля"
			description="Введите новый пароль"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="my-2 grid gap-4"
				>
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
										disabled={isPending}
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
										disabled={isPending}
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
					<Button disabled={!recaptchaValue || isPending} type="submit">
						{isPending ? "Изменение пароля..." : "Изменить пароль"}
					</Button>
				</form>
			</Form>
		</AuthFormWrapper>
	)
}
