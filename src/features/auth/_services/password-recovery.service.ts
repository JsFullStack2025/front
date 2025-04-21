import { api } from "@/shared/api/instance.api"

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
}

export const passwordRecoveryService = new PasswordRecoveryService()
