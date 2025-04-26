import { type Metadata } from "next"

import { SettingsForm } from "@/features/profile/_ui/settings-form"

export const metadata: Metadata = {
	title: "Профиль"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<SettingsForm />
		</div>
	)
}
