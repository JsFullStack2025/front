import { Metadata } from "next"

import { ResetPasswordForm } from "@/features/auth/_ui/reset-password-form"

export const metadata: Metadata = {
	title: "Сброс пароля"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<ResetPasswordForm />
		</div>
	)
}
