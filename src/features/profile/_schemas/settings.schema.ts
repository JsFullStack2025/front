import { z } from "zod"

export const settingsSchema = z.object({
	name: z.string().min(3, { message: "Введите имя" }),
	email: z.string().email({ message: "Введите email" }),
	isTwoFactorEnabled: z.boolean()
})

export type SettingsSchema = z.infer<typeof settingsSchema>
