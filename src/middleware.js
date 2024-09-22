import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Redirect users to this page if not authenticated
  },
})

// Optional: Specify which routes to apply middleware to
export const config = {
  matcher: ["/dashboard/:path*", "/protected/:path*"], // Add your protected routes here
}
