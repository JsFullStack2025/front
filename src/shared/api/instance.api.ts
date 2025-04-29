import { FetchClient } from "../lib/fetch/client"

console.log(process.env.API_URL)

export const api = new FetchClient({
	baseUrl: process.env.API_URL as string,
	options: {
		credentials: "include"
	}
})
