import { api } from "@/shared/api/instance.api"

import { SignInSchema } from "../_schemas/signin.schema"
import { SignUpSchema } from "../_schemas/signup.schema"
import { User } from "../_types/user.types"

class AuthService {
	public async signUp(body: SignUpSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined
		const response = await api.post<User>("auth/signup", body, { headers })

		return response
	}

	public async signIn(body: SignInSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined
		const response = await api.post<User>("auth/signin", body, { headers })

		return response
	}

	public async oauth(provider: "github" | "yandex") {
		const response = await api.get<{ url: string }>(
			`auth/oauth/connect/${provider}`
		)

		return response
	}

	public async logout() {
		const response = await api.post<User>("auth/logout")

		return response
	}
}

export const authService = new AuthService()
