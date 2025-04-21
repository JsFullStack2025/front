import { FetchError } from "./errors"
import { FetchSearchParams, RequestOptions } from "./types"

export class FetchClient {
	private baseUrl: string
	public headers?: Record<string, string>
	public searchParams?: FetchSearchParams
	public options?: RequestOptions

	constructor(init: {
		baseUrl: string
		headers?: Record<string, string>
		searchParams?: FetchSearchParams
		options?: RequestOptions
	}) {
		this.baseUrl = init.baseUrl
		this.headers = init.headers
		this.searchParams = init.searchParams
		this.options = init.options
	}

	private createSearchParams(params: FetchSearchParams) {
		const searchParams = new URLSearchParams()

		for (const key in { ...this.searchParams, ...params }) {
			if (Object.prototype.hasOwnProperty.call(params, key)) {
				const value = params[key]

				if (Array.isArray(value)) {
					value.forEach(
						(it) => it !== undefined && searchParams.append(key, it.toString())
					)
				} else if (value) {
					searchParams.set(key, value.toString())
				}
			}
		}

		return `?${searchParams.toString()}`
	}

	private async request<T>(
		endpoint: string,
		method: RequestInit["method"],
		options: RequestOptions = {}
	) {
		let url = `${this.baseUrl}/${endpoint}`

		if (options.searchParams) {
			url += this.createSearchParams(options.searchParams)
		}

		const config: RequestInit = {
			...options,
			...(!!this.options && { ...this.options }),
			method,
			headers: {
				...this.headers,
				...(!!options?.headers && options.headers)
			}
		}

		const response: Response = await fetch(url, config)

		if (!response.ok) {
			const error = (await response.json()) as { message: string } | undefined

			throw new FetchError(
				response.status,
				error?.message || response.statusText
			)
		}

		if (response.headers.get("Content-Type")?.includes("application/json")) {
			return (await response.json()) as unknown as T
		} else {
			return (await response.text()) as unknown as T
		}
	}

	public async get<T>(
		endpoint: string,
		options: Omit<RequestOptions, "body"> = {}
	) {
		return this.request<T>(endpoint, "GET", options)
	}

	public async post<T>(
		endpoint: string,
		body?: Record<string, any>,
		options: RequestOptions = {}
	) {
		return this.request<T>(endpoint, "POST", {
			...options,
			headers: {
				"Content-Type": "application/json",
				...(options?.headers || {})
			},
			...(!!body && { body: JSON.stringify(body) })
		})
	}

	public async put<T>(
		endpoint: string,
		body?: Record<string, any>,
		options: RequestOptions = {}
	) {
		return this.request<T>(endpoint, "PUT", {
			...options,
			headers: {
				"Content-Type": "application/json",
				...(options?.headers || {})
			},
			...(!!body && { body: JSON.stringify(body) })
		})
	}

	public async delete<T>(
		endpoint: string,
		options: Omit<RequestOptions, "body"> = {}
	) {
		return this.request<T>(endpoint, "DELETE", options)
	}

	public async patch<T>(
		endpoint: string,
		body?: Record<string, any>,
		options: RequestOptions = {}
	) {
		return this.request<T>(endpoint, "PATCH", {
			...options,
			headers: {
				"Content-Type": "application/json",
				...(options?.headers || {})
			},
			...(!!body && { body: JSON.stringify(body) })
		})
	}
}
