import { useFormContext } from "react-hook-form"

import { Label } from "@/shared/ui/label"

import { cn } from "@/shared/lib/utils"

import { FieldRenderer } from "../renderer"

import { GroupField as GroupFieldType } from "./types"

interface GroupFieldProps {
	field: GroupFieldType
	className?: string
}

export const GroupField = ({ field, className }: GroupFieldProps) => {
	const {
		formState: { errors }
	} = useFormContext()
	const error = errors[field.name]?.message as string

	return (
		<div className={cn("space-y-4", className)}>
			<Label>{field.label}</Label>
			<div className="space-y-4 border-l-2 border-gray-200 pl-4">
				{Object.entries(field.fields).map(([name, fieldConfig]) => (
					<FieldRenderer
						key={name}
						field={{
							...fieldConfig,
							name: `${field.name}.${name}`
						}}
					/>
				))}
			</div>
			{field.description && (
				<p className="text-sm text-gray-500">{field.description}</p>
			)}
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	)
}
