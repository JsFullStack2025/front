import { z } from "zod"

export const signinSchema = z.object({
	email: z.string().email("Введите корректный email адрес"),
	password: z.string().min(1, "Введите пароль")
})

export type SignInSchema = z.infer<typeof signinSchema>
