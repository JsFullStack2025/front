import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
	const { url, cookies } = request
	const session = cookies.get("session")?.value

	if (url.includes("/auth")) {
		if (session) {
			return NextResponse.redirect(new URL("/dashboard/settings", url))
		}

		return NextResponse.next()
	}

	if (url.includes("/dashboard")) {
		if (!session) {
			return NextResponse.redirect(new URL("/auth/signin", url))
		}

		return NextResponse.next()
	}
}

export const config = {
	matcher: ["/auth/:path*", "/dashboard/:path*"]
}
