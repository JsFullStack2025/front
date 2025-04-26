"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Spinner } from "@/shared/ui/spinner"
import { Switch } from "@/shared/ui/switch"

import { settingsSchema } from "../_schemas/settings.schema"
import { SettingsSchema } from "../_schemas/settings.schema"

import { ProfileButton, ProfileButtonSkeleton } from "./profile-button"
import { useUser } from "@/shared/hooks/useUser.hook"

export function SettingsForm() {
	const { user, isLoading } = useUser()

	const form = useForm<SettingsSchema>({
		resolver: zodResolver(settingsSchema),
		values: {
			name: user?.displayName || "",
			email: user?.email || "",
			isTwoFactorEnabled: user?.isTwoFactorEnabled || false
		}
	})

	const onSubmit = (data: SettingsSchema) => {
		console.log(data)
	}

	if (!user && !isLoading) return null

	return (
		<Card className="w-[400px]">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-center text-xl font-bold">
					Настройки профиля
				</CardTitle>
				{isLoading ? <ProfileButtonSkeleton /> : <ProfileButton user={user!} />}
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<Spinner />
				) : (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="grid gap-2 space-y-2"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Имя</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="text"
												autoComplete="name"
												//disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="email"
												autoComplete="email"
												autoCorrect="off"
												autoCapitalize="none"
												//disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="isTwoFactorEnabled"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-sm">
										<FormLabel>Двухфакторная аутентификация</FormLabel>
										<FormDescription>
											Защитите свой аккаунт дополнительной проверкой при входе
										</FormDescription>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type="submit">Сохранить</Button>
						</form>
					</Form>
				)}
			</CardContent>
		</Card>
	)
}
