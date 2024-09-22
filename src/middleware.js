import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req })

  // Check if the user is authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url))
  }

  return NextResponse.next()
}

// Specify which routes to apply middleware to
export const config = {
  matcher: ["/dashboard/:path*", "/protected/:path*"],
}
