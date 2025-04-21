import { Metadata } from "next"

import { VerificationForm } from "@/features/auth/_ui/verification-form"

export const metadata: Metadata = {
	title: "Подтверждение электронной почты"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<VerificationForm />
		</div>
	)
}
