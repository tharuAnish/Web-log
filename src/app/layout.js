import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/Footer"
import { ThemeProvider } from "@/components/theme/themeProvider"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="wrapper px-6 sm:px-8  min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
