export type FetchSearchParams = {
	[key: string]:
		| string
		| number
		| boolean
		| undefined
		| Array<string | number | boolean | undefined>
}

export interface RequestOptions extends RequestInit {
	headers?: Record<string, string>
	searchParams?: FetchSearchParams
}

export type FetchRequestConfig<Params = undefined> = Params extends undefined
	? { config?: RequestOptions }
	: { config?: RequestOptions; params: Params }
