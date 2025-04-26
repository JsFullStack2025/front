import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { authService } from "@/features/auth/_services/auth.service"

import { toastMessageHandler } from "@/shared/lib/toast-message-handler"

export function useLogoutMutation() {
	const router = useRouter()

	const { mutate: logout, isPending } = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authService.logout(),
		onSuccess() {
			router.push("/auth/signin")
		},
		onError: (error) => {
			toastMessageHandler(error)
		}
	})

	return { logout, isPending }
}
