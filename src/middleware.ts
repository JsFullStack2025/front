import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let userAuth = request.cookies.get("auth-cookie")?.value
  const UserId = JSON.parse(userAuth?.replace("j:","") || '[]').userId
  console.log("middleware AuthCookies", UserId)
  if (UserId > 0) return NextResponse.next()
  //if (!request.nextUrl.pathname.startsWith('/login'))
  return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/pages/:path*',
}