import { useMutation } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

import { NewPasswordSchema } from "../_schemas/new-password.schema"
import { passwordRecoveryService } from "../_services/password-recovery.service"

export function useNewPasswordMutation() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const token = searchParams.get("token")

	const { mutate: newPassword, isPending } = useMutation({
		mutationKey: ["new-password"],
		mutationFn: ({
			data,
			recaptcha
		}: {
			data: NewPasswordSchema
			recaptcha: string
		}) => passwordRecoveryService.new(data, token, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
			} else {
				toast.success("Пароль успешно изменен")
				router.push("/dashboard/settings")
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { newPassword, isPending }
}
