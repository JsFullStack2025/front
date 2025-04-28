import { z } from "zod"
export const signinSchema = z.object({
	email: z.string().email("Введите корректный email адрес"),
	password: z.string().min(1, "Введите пароль"),
	code: z.optional(z.string().min(6, "Введите код 2FA"))
})

export type SignInSchema = z.infer<typeof signinSchema>

export const signupSchema = z
	.object({
		name: z.string().min(3, "Имя обязательно для заполнения"),
		email: z.string().email("Введите корректный email адрес"),
		password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
		confirmPassword: z
			.string()
			.min(8, "Пароль должен содержать минимум 8 символов")
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"]
	})

export type SignUpSchema = z.infer<typeof signupSchema>
