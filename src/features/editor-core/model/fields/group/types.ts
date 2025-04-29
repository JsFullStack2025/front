import { BaseField, Field } from "@/features/editor-core/model/types"

export type GroupField = BaseField & {
	type: "group"
	fields: Field[]
}
