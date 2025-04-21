import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
