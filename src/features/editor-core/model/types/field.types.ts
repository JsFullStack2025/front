import { GroupField } from "../fields/group/types"
import { TextField } from "../fields/text/types"

export type BaseField = {
	name: string
	label: string
	description?: string
	placeholder?: string
}

export type OptionalField = {
	required?: boolean
}

export type Field = TextField | GroupField
