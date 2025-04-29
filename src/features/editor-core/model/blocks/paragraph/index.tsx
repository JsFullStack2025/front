import { zodResolver } from "@hookform/resolvers/zod"

import { BlockType } from "../../types/block.types"

import { ParagraphSchema, paragraphSchema } from "./schema"

export const Paragraph: BlockType<ParagraphSchema> = {
	id: "paragraph",
	fields: [
		{
			name: "content",
			type: "text",
			label: "Текст",
			description: "Введите текст",
			defaultValue: "Текст 1",
			required: true
		}
	],
	resolver: zodResolver(paragraphSchema)
}
