"use client"

import { type PropsWithChildren } from "react"

import { TanstackQueryProvider } from "./tanstack-query.provider"

export function AppProvider({ children }: PropsWithChildren<unknown>) {
	return <TanstackQueryProvider>{children}</TanstackQueryProvider>
}
