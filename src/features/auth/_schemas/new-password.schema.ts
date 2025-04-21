import { z } from "zod"

export const newPasswordSchema = z
	.object({
		password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
		confirmPassword: z
			.string()
			.min(8, "Пароль должен содержать минимум 8 символов")
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"]
	})

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>
