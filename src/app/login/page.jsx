"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"

import Logo from "@/components/footer/Logo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGithub, FaGoogle } from "react-icons/fa"

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <p>Loading...</p> // Show a loading state while fetching the session
  }
  console.log(session, status)
  if (status === "authenticated") {
    router.push("/")
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* <p>Welcome, {session.user.name}!</p> 
      <p>Email: {session.user.email}</p> */}
      <Card className="w-[380px] shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Welcome !</CardTitle>
          <CardDescription className="text-gray-500">
            Sign up for your new account
          </CardDescription>
        </CardHeader>
        <div className="flex justify-center ">
          <Logo />
        </div>
        <CardContent className="grid gap-4 mt-16 mb-4">
          <Button
            onClick={() => {
              console.log("Attempting to sign in with GitHub")
              signIn("github")
            }}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white"
          >
            <FaGithub className="mr-2 h-5 w-5" /> Login with GitHub
          </Button>
          <Button
            onClick={() => {
              console.log("Attempting to sign in with Google")
              signIn("google")
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            <FaGoogle className="mr-2 h-5 w-5" /> Login with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Alredy have an account?
          <Link href="/signin" className="text-blue-600 ml-1 hover:underline">
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
