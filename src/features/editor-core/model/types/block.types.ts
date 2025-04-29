import { FieldValues, Resolver } from "react-hook-form"

import { Field } from "../types/field.types"

export interface BaseBlock {
	id: string
	type: string
	createdAt: Date
	updatedAt: Date
}

export interface TextBlock extends BaseBlock {
	type: "text"
	content: string
}

export type Block = TextBlock

export interface BlockType<Schema extends FieldValues> {
	id: string
	fields: Field[]
	resolver: Resolver<Schema, any, Schema>
}
