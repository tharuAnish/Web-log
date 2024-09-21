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
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-[380px] shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-gray-500">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <div className="flex justify-center ">
          <Logo />
        </div>
        <CardContent className="grid gap-4 mt-16 mb-4">
          <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            <FaGithub className="mr-2 h-5 w-5" /> Login with GitHub
          </Button>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            <FaGoogle className="mr-2 h-5 w-5" /> Login with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/signup" className="text-blue-600 ml-1 hover:underline">
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
