export class FetchError extends Error {
	constructor(
		public readonly statusCode: number,
		public readonly message: string
	) {
		super(message)

		Object.setPrototypeOf(this, new.target.prototype)
	}
}
