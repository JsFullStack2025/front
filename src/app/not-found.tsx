import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/shared/ui/button"

export const metadata: Metadata = {
	title: "Страница не найдена",
	description: "Страница не найдена"
}

export default function NotFound() {
	return (
		<div className="mt-[25vh] space-y-6 p-8 text-center">
			<h1 className="text-6xl font-bold text-gray-800">404</h1>
			<h2 className="text-2xl font-semibold text-gray-600">
				Страница не найдена
			</h2>
			<p className="text-gray-500">
				Запрашиваемая вами страница не существует.
			</p>

			<Link href="/">
				<Button className="p-6">Вернуться на главную</Button>
			</Link>
		</div>
	)
}
