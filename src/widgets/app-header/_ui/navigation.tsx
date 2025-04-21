import Link from "next/link"

const NAVIGATION_LINKS = [
	{
		label: "Документация",
		href: "/docs"
	},
	{
		label: "Последние изменения",
		href: "/changelog"
	},
	{
		label: "Контакты",
		href: "/contacts"
	}
]

export function Navigation() {
	return (
		<nav className="flex flex-col items-start gap-6 pl-6 text-sm font-medium md:flex-row md:items-center md:pl-0">
			{NAVIGATION_LINKS.map((link) => (
				<Link
					key={link.href}
					className="hover:text-foreground/80 text-foreground/60 text-lg transition-colors md:text-sm"
					href={link.href}
				>
					{link.label}
				</Link>
			))}
		</nav>
	)
}
