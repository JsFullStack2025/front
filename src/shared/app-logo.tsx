import { AppIcon } from "./app-icon"

export function AppLogo() {
	return (
		<div className="flex items-center gap-2">
			<AppIcon className="size-6" />
			<span className="text-xl font-bold">Visiteo</span>
		</div>
	)
}
