import { BaseField, OptionalField } from "@/features/editor-core/domain/types"

export type TextField = BaseField &
	OptionalField & {
		type: "text"
		defaultValue?: string
		minLength?: number
		maxLength?: number
	}
