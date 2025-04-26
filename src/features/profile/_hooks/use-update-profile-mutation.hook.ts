import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

import { SettingsSchema } from "../_schemas/settings.schema"
import { userService } from "../_services/user.service"

export function useUpdateProfileMutation() {
	const { mutate: updateProfile, isPending } = useMutation({
		mutationKey: ["update-profile"],
		mutationFn: (data: SettingsSchema) => userService.updateProfile(data),
		onSuccess: () => {
			toast.success("Данные обновлены")
		},
		onError: (error) => {
			toastMessageHandler(error)
		}
	})

	return { updateProfile, isPending }
}
