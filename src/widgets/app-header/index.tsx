import Link from "next/link"

import { Button } from "@/shared/ui/button"

export function AppHeader() {
	return (
		<div className="hide-on-small-height absolute inset-x-0 top-4 flex items-center justify-between gap-2">
			<div className="pl-15">
				<Button variant="customSecondary">
					<Link href="/">VISITEO</Link>
				</Button>
			</div>
			<div className="pr-15">
				<Button variant="customSecondary">
					<Link href="/login">Войти/Профиль</Link>
				</Button>
			</div>
		</div>
	)
}
