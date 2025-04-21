import { Metadata } from "next"

import { AuthFormWrapper } from "@/features/auth/_ui/auth-form-wrapper"

import { Separator } from "@/shared/ui/separator"

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
				RegForm
				<Separator label="или" />
				AuthForm
			</AuthFormWrapper>
		</div>
	)
}
