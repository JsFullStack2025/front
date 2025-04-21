import { useMutation } from "@tanstack/react-query"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

import { SignUpSchema } from "../_schemas/signup.schema"
import { authService } from "../_services/auth.service"

export function useSignUpMutation() {
	const { mutate: signUp, isPending } = useMutation({
		mutationKey: ["signup"],
		mutationFn: ({ data, captcha }: { data: SignUpSchema; captcha: string }) =>
			authService.signUp(data, captcha),
		onSuccess(data: any) {
			toastMessageHandler(data)
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { signUp, isPending }
}
