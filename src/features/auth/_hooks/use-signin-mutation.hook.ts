import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

import { SignInSchema } from "../_schemas/signin.schema"
import { authService } from "../_services/auth.service"

export function useSignInMutation() {
	const router = useRouter()

	const { mutate: signIn, isPending } = useMutation({
		mutationKey: ["signin"],
		mutationFn: ({ data, captcha }: { data: SignInSchema; captcha: string }) =>
			authService.signIn(data, captcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
			} else {
				toast.success("Вы успешно вошли в систему!", {
					description:
						"Самое время начать творить. Рекомендуем ознакомиться с основными возможностями платформы"
				})
				router.push("/dashboard/settings")
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { signIn, isPending }
}
