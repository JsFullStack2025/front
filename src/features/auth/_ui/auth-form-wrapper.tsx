import Link from "next/link"
import { type PropsWithChildren } from "react"

import { Button } from "@/shared/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/shared/ui/card"

type Props = {
	heading: string
	description?: string
	backButtonLabel: string
	backButtonHref: string
}

export function AuthFormWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref
}: PropsWithChildren<Props>) {
	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				{backButtonLabel && backButtonHref && (
					<Button asChild variant="link" className="w-full font-normal">
						<Link href={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
