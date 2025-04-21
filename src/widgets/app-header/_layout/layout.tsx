import { Menu } from "lucide-react"

import { Button } from "@/shared/ui/button"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/shared/ui/sheet"

type Props = {
	logo?: React.ReactNode
	navigation?: React.ReactNode
	profile?: React.ReactNode
	actions?: React.ReactNode
}

export function Layout({ logo, navigation, profile, actions }: Props) {
	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
			<div className="container mx-auto flex h-14 items-center">
				<div className="mr-2 md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader className="mb-5 border-b pb-5">
								<SheetTitle className="sr-only">Меню навигации</SheetTitle>
								{logo}
							</SheetHeader>
							{navigation}
						</SheetContent>
					</Sheet>
				</div>

				<div className="mr-6">{logo}</div>
				<div className="flex flex-1 items-center">
					<div className="hidden md:flex">{navigation}</div>
					<div className="flex flex-1 items-center justify-end space-x-3">
						{actions}
						{profile}
					</div>
				</div>
			</div>
		</header>
	)
}
