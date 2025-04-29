import { FormProvider, useForm } from "react-hook-form"

import { Field } from "@/features/editor-core/model/types"

import { FieldRenderer } from "../model/fields/renderer"

interface Props {
	fields: Field[]
	onSubmit: (data: any) => void
	defaultValues?: Record<string, any>
}

export const PropertiesForm = ({
	fields,
	onSubmit,
	defaultValues = {}
}: Props) => {
	const methods = useForm({
		defaultValues
	})

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
				{fields.map((field) => (
					<FieldRenderer key={field.name} field={field} />
				))}
				<button
					type="submit"
					className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>
					Сохранить
				</button>
			</form>
		</FormProvider>
	)
}
