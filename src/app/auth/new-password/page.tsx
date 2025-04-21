import { Metadata } from "next"

import { NewPasswordForm } from "@/features/auth"

export const metadata: Metadata = {
	title: "Изменение пароля"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<NewPasswordForm />
		</div>
	)
}
