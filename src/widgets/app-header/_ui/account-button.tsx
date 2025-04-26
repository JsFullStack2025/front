"use client"

import Link from "next/link"

import { Button } from "@/shared/ui/button"

import { useUser } from "@/shared/hooks/useUser.hook"

export function AccountButton() {
	const { user, isLoading } = useUser()

	if (isLoading || !user) return <AuthButton />
	return "Avatar"
}

const AuthButton = () => (
	<Link href="/auth/signin">
		<Button>Вход</Button>
	</Link>
)
