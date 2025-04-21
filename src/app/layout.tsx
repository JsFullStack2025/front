import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import { AppHeader } from "@/widgets/app-header"

import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: {
		default: "Visiteo / Конструктор карточек для бизнеса и не только",
		template: "%s - Visiteo / Конструктор карточек для бизнеса и не только"
	},
	description:
		"Создавайте профессиональные карточки для вашего бизнеса, личного бренда или портфолио с помощью простого и удобного конструктора Visiteo",
	keywords:
		"карточка, карточка для бизнеса, карточка для личного бренда, карточка для портфолио, конструктор карточек, создание карточек, визитная карточка, визитная карточка для бизнеса, визитная карточка для личного бренда, визитная карточка для портфолио",
	icons: {
		icon: [
			{
				type: "image/svg+xml",
				url: "/favicon.svg"
			},
			{
				type: "image/x-icon",
				rel: "shortcut icon",
				url: "/favicon.ico"
			},
			{
				type: "image/png",
				sizes: "128x128",
				url: "/favicon.png"
			}
		]
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body
				className={`${jetbrainsMono.variable} bg-background min-h-screen overflow-x-hidden antialiased`}
			>
				<AppHeader />
				{children}
			</body>
		</html>
	)
}
