import Link from "next/link"
import React from "react"

export default function AuthLinks() {
  const status = "notauthenticated"
  return (
    <div>
      {status === "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <div className="flex flex-col gap-2">
          <Link href="/write" className="px-3 py-2 hover:bg-secondary">
            Write
          </Link>
          <Link href="/logout" className="px-3 py-2 hover:bg-secondary">
            Logout
          </Link>
        </div>
      )}
    </div>
  )
}
