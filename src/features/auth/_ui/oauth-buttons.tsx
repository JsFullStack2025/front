import { useMutation } from "@tanstack/react-query"
import "lucide-react"
import { useRouter } from "next/navigation"
import { FaGithub, FaYandex } from "react-icons/fa"
import { toast } from "sonner"

import { Button } from "@/shared/ui/button"

import { authService } from "../_services/auth.service"

export function OAuthButtons() {
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationKey: ["oauth"],
		mutationFn: async (provider: "github" | "yandex") =>
			await authService.oauth(provider),
		onError: () =>
			toast.error("Что-то пошло не так", {
				description: "На стороне сервера возникла ошибка, попробуйте позже"
			})
	})

	const handleSubmit = async (provider: "github" | "yandex") => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}

	return (
		<div className="grid grid-cols-2 gap-6">
			<Button variant="outline" onClick={() => handleSubmit("yandex")}>
				<FaYandex className="mr-2 size-4" />
				Яндекс
			</Button>
			<Button variant="outline" onClick={() => handleSubmit("github")}>
				<FaGithub className="mr-2 size-4" />
				GitHub
			</Button>
		</div>
	)
}
