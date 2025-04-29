import { BaseField, OptionalField } from "@/features/editor-core/model/types"

export type TextField = BaseField &
	OptionalField & {
		type: "text"
		defaultValue?: string
		minLength?: number
		maxLength?: number
	}
