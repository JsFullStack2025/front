"use client"

import Link from "next/link"

import { User } from "@/features/auth/_types/user.types"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"

import { useUser } from "@/shared/hooks/useUser.hook"

export function AccountButton() {
	const { user, isLoading } = useUser()

	if (isLoading || !user) return <AuthButton />
	return <DashboardButton user={user} />
}

const AuthButton = () => (
	<Link href="/auth/signin">
		<Button>Вход</Button>
	</Link>
)

const DashboardButton = ({ user }: { user: User }) => (
	<Link href="/dashboard">
		<Avatar>
			<AvatarImage src={user.picture} />
			<AvatarFallback>{user.displayName.slice(0, 1)}</AvatarFallback>
		</Avatar>
	</Link>
)
