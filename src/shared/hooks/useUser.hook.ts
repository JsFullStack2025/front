import { useQuery } from "@tanstack/react-query"

import { userService } from "@/features/profile/_services/user.service"

export function useUser() {
	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => userService.findUser()
	})

	return { user, isLoading }
}
