import { type Metadata } from "next"

import { SettingsForm } from "@/features/profile"

export const metadata: Metadata = {
	title: "Настройки профиля"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<SettingsForm />
		</div>
	)
}
