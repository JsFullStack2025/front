"use client"

import { type PropsWithChildren } from "react"
import { Toaster } from "@/shared/ui/sonner"

import { TanstackQueryProvider } from "./tanstack-query.provider"

export function AppProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<TanstackQueryProvider>
			{children}
			<Toaster />
		</TanstackQueryProvider>
	)
}
