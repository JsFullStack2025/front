import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserIdFromCookie } from './app/pages/userprofile/helper'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let userAuth = (await cookies()).get("auth-cookie")?.value
 const userId = getUserIdFromCookie(userAuth)
  //console.log("middleware AuthCookies", UserId)
  if (userId > 0){
     const response = NextResponse.next()
    // response.cookies.set("id", String(userId))

    return response

  }
  //if (!request.nextUrl.pathname.startsWith('/login'))
  return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/pages/:path*',
}