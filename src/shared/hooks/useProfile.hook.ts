import { useQuery } from "@tanstack/react-query"

import { profileService } from "@/features/profile/_services/profile.service"

export function useProfile() {
	const { data: profile, isLoading } = useQuery({
		queryKey: ["profile"],
		queryFn: () => profileService.findProfile()
	})

	return { profile, isLoading }
}
