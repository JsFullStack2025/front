import { FetchClient } from "../lib/fetch/client"

export const api = new FetchClient({
	baseUrl: process.env.API_URL as string,
	options: {
		credentials: "include"
	}
})
