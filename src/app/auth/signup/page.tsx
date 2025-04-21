import { Metadata } from "next"

import { SignUpForm } from "@/features/auth"

export const metadata: Metadata = {
	title: "Регистрация"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<SignUpForm />
		</div>
	)
}
