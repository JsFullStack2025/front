import { Metadata } from "next"

import { AuthFormWrapper } from "@/features/auth/_ui/auth-form-wrapper"

export const metadata: Metadata = {
	title: "Регистрация"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<AuthFormWrapper
				heading="Регистрация"
				description="Введите ваш email и пароль для регистрации"
				backButtonLabel="Уже есть аккаунт? Авторизуйтесь"
				backButtonHref="/signin"
				oauth
			>
				RegForm
			</AuthFormWrapper>
		</div>
	)
}
