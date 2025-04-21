import { Metadata } from "next"

import { AuthFormWrapper } from "@/features/auth/_ui/auth-form-wrapper"

export const metadata: Metadata = {
	title: "Авторизация"
}

export default function Page() {
	return (
		<div className="flex w-full items-center justify-center">
			<AuthFormWrapper
				heading="Авторизация"
				description="Введите ваш email и пароль для авторизации"
				backButtonLabel="Нет аккаунта? Зарегистрируйтесь"
				backButtonHref="/signup"
			>
				AuthForm
			</AuthFormWrapper>
		</div>
	)
}
