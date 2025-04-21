import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

import { ResetPasswordSchema } from "../_schemas/reset.schema"
import { passwordRecoveryService } from "../_services/password-recovery.service"

export function useResetPasswordMutation() {
	const { mutate: resetPassword, isPending } = useMutation({
		mutationKey: ["reset-password"],
		mutationFn: ({
			data,
			recaptcha
		}: {
			data: ResetPasswordSchema
			recaptcha: string
		}) => passwordRecoveryService.reset(data, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
			} else {
				toast.success("Проверьте почту", {
					description:
						"На почту была отправлена ссылка для подтверждения пароля"
				})
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { resetPassword, isPending }
}
