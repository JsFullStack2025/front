import { User } from "@/features/auth/_types/user.types"

import { api } from "@/shared/api/instance.api"

import { SettingsSchema } from "../_schemas/settings.schema"

class ProfileService {
	public async findProfile() {
		const response = await api.get<User>("users/profile")

		return response
	}

	public async updateProfile(data: SettingsSchema) {
		const response = await api.patch<User>("users/profile", data)

		return response
	}
}

export const profileService = new ProfileService()
