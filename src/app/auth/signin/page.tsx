import { Metadata } from "next"

import { SignInForm } from "@/features/auth"

export const metadata: Metadata = {
	title: "Авторизация"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<SignInForm />
		</div>
	)
}
