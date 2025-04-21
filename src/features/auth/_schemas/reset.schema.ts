import { z } from "zod"

export const resetPasswordSchema = z.object({
	email: z.string().email("Введите корректный email адрес")
})

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>
