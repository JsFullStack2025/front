"use client"

import { LogOutIcon } from "lucide-react"

import { User } from "@/features/auth/_types/user.types"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"
import { Skeleton } from "@/shared/ui/skeleton"

import { useLogoutMutation } from "../_hooks/use-logout-mutation.hook"

type Props = {
	user: User
}

export function ProfileButton({ user }: Props) {
	const { logout, isPending } = useLogoutMutation()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user.picture} />
					<AvatarFallback>{user.displayName.slice(0, 1)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end">
				<DropdownMenuItem disabled={isPending} onClick={() => logout()}>
					<LogOutIcon className="mr-2 size-4" />
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function ProfileButtonSkeleton() {
	return <Skeleton className="size-10 rounded-full" />
}
