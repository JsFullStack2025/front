"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { Spinner } from "@/shared/ui/spinner"

import { useVerificationMutation } from "../_hooks/use-verification-mutation.hook"

import { AuthFormWrapper } from "./auth-form-wrapper"

export function VerificationForm() {
	const searchParams = useSearchParams()
	const token = searchParams.get("token")

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [token])

	return (
		<AuthFormWrapper heading="Подтверждение электронной почты">
			<div className="flex items-center justify-center gap-4">
				<Spinner />
				Загрузка...
			</div>
		</AuthFormWrapper>
	)
}
