"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type PropsWithChildren, useState } from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function TanstackQueryProvider({
	children
}: PropsWithChildren<unknown>) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return <QueryClientProvider client={client}>
		{children}
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
}
