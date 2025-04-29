import { Field } from "../types"

import { GroupField } from "./group/renderer"
import { TextField } from "./text/renderer"

interface FieldRendererProps {
	field: Field
	className?: string
}

type FieldComponent = React.ComponentType<{ field: Field; className?: string }>

const FIELD_COMPONENTS: Record<Field["type"], FieldComponent> = {
	text: TextField,
	group: GroupField
} as const

export const FieldRenderer = ({ field, className }: FieldRendererProps) => {
	const Component = FIELD_COMPONENTS[field.type]
	return Component ? <Component field={field} className={className} /> : null
}
