import { Layout } from "./_layout/layout"
import { AccountButton } from "./_ui/account-button"
import { Navigation } from "./_ui/navigation"
import { AppLogo } from "@/shared/app-logo"

export function AppHeader() {
	return (
		<Layout
			logo={<AppLogo />}
			navigation={<Navigation />}
			profile={<AccountButton />}
			actions={undefined}
		/>
	)
}
