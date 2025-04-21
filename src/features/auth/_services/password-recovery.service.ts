import { api } from "@/shared/api/instance.api"

import { NewPasswordSchema } from "../_schemas/new-password.schema"
import { ResetPasswordSchema } from "../_schemas/reset.schema"
import { User } from "../_types/user.types"

class PasswordRecoveryService {
	public async reset(body: ResetPasswordSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<User>(
			"auth/password-recovery/reset",
			body,
			{
				headers
			}
		)

		return response
	}

	public async new(
		body: NewPasswordSchema,
		token: string | null,
		recaptcha?: string
	) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<User>(
			`auth/password-recovery/new/${token}`,
			body,
			{
				headers
			}
		)

		return response
	}
}

export const passwordRecoveryService = new PasswordRecoveryService()
