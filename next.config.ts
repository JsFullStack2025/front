import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	env: {
		API_URL: process.env.API_URL,
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com"
			},
			{
				protocol: "https",
				hostname: "avatars.yandex.net"
			}
		]
	}
}

export default nextConfig
