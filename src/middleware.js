// middleware.js
import { NextResponse } from "next/server"
import { auth } from "./utils/auth"

export async function middleware(req) {
  // // Get the current session
  // const session = await auth()
  // // Define your routes
  // const publicRoutes = ["/login", "/", "/blogs", "/about"]
  // const protectedRoutes = ["/create", "/contact"]
  // // Check the requested URL
  // const { pathname } = req.nextUrl
  // // Logic for unauthenticated users
  // if (!session) {
  //   // If the user is unauthenticated
  //   if (!publicRoutes.includes(pathname)) {
  //     return NextResponse.redirect(new URL("/login", req.url)) // Redirect to login
  //   }
  // } else {
  //   // If the user is authenticated
  //   if (pathname === "/login") {
  //     return NextResponse.redirect(new URL("/", req.url)) // Redirect to homepage
  //   }
  //   // Optionally: Add more checks for authenticated users if needed
  //   if (protectedRoutes.includes(pathname)) {
  //     return NextResponse.next() // Allow access to protected routes
  //   }
  // }
  // // Allow the request to continue for all other routes
  // return NextResponse.next()
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ["/", "/login", "/blogs", "/create", "/contact", "/about"],
}
