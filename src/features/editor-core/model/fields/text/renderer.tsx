import { useFormContext } from "react-hook-form"

import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"

import { cn } from "@/shared/lib/utils"

import { TextField as TextFieldType } from "./types"

interface TextFieldProps {
	field: TextFieldType
	className?: string
}

export const TextField = ({ field, className }: TextFieldProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()
	const error = errors[field.name]?.message as string

	return (
		<div className={cn("space-y-2", className)}>
			<Label htmlFor={field.name}>
				{field.label}
				{field.required && <span className="ml-1 text-red-500">*</span>}
			</Label>
			<Input
				id={field.name}
				placeholder={field.placeholder}
				{...register(field.name, {
					required: field.required ? "Это поле обязательно" : false
				})}
				aria-describedby={
					field.description ? `${field.name}-description` : undefined
				}
			/>
			{field.description && (
				<p id={`${field.name}-description`} className="text-sm text-gray-500">
					{field.description}
				</p>
			)}
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	)
}
