"use client"

import { LogOutIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"
import { Skeleton } from "@/shared/ui/skeleton"

import { useLogoutMutation } from "../_hooks/use-logout-mutation.hook"

import { useProfile } from "@/shared/hooks/useProfile.hook"

export function ProfileButton() {
	const { profile, isLoading } = useProfile()
	const { logout, isPending } = useLogoutMutation()

	if (!profile) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={profile.picture} />
					<AvatarFallback>{profile.displayName.slice(0, 1)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end">
				<DropdownMenuItem
					disabled={isLoading || isPending}
					onClick={() => logout()}
				>
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
