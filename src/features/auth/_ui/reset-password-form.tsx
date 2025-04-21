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

import { useResetPasswordMutation } from "../_hooks/use-reset-password-mutation.hook"
import {
	ResetPasswordSchema,
	resetPasswordSchema
} from "../_schemas/reset.schema"

import { AuthFormWrapper } from "./auth-form-wrapper"

export function ResetPasswordForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			email: ""
		}
	})

	const { resetPassword, isPending } = useResetPasswordMutation()

	const onSubmit = (data: ResetPasswordSchema) => {
		if (recaptchaValue) {
			resetPassword({ data, recaptcha: recaptchaValue })
		}
	}

	return (
		<AuthFormWrapper
			heading="Сброс пароля"
			description="Введите ваш email для сброса пароля"
			backButtonLabel="Еще нет аккаунта? Зарегистрируйтесь"
			backButtonHref="/signup"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="my-2 grid gap-4"
				>
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

					<div className="flex justify-center">
						<ReCAPTCHA
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={setRecaptchaValue}
						/>
					</div>
					<Button disabled={!recaptchaValue || isPending} type="submit">
						{isPending ? "Запрос сброса пароля..." : "Сбросить пароль"}
					</Button>
				</form>
			</Form>
		</AuthFormWrapper>
	)
}
