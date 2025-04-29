import { z } from "zod"

export const paragraphSchema = z.object({
	content: z.string().min(1)
})

export type ParagraphSchema = z.infer<typeof paragraphSchema>
