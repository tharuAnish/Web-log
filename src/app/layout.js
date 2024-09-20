import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/Footer"
import { ThemeProvider } from "@/components/theme/themeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="wrapper px-2 sm:px-4 lg:px-6 min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
