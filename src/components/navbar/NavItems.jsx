"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

import {
  PiHouse,
  PiHouseFill,
  PiPhone,
  PiPhoneFill,
  PiInfo,
  PiInfoFill,
  PiTextAlignLeft,
  PiTextAlignLeftFill,
  PiSignOut,
  PiSignOutFill,
  PiSignIn,
  PiSignInFill,
} from "react-icons/pi"
import { FaRegPenToSquare, FaPenToSquare } from "react-icons/fa6"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { MenuIcon, X } from "lucide-react"
import { Button } from "../ui/button"
import AuthLinks from "../authLinks/AuthLinks"

export function NavItems() {
  const pathname = usePathname()
  // Get the session and status from NextAuth
  const { data: session, status } = useSession()
  console.log("Session Data:", session, status)

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: PiHouse,
      activeIcon: PiHouseFill,
    },
    ...(status === "authenticated"
      ? [
          {
            name: "Create",
            path: "/create",
            icon: FaRegPenToSquare,
            activeIcon: FaPenToSquare,
          },
        ]
      : []),
    {
      name: "All Blogs",
      path: "/blog",
      icon: PiTextAlignLeft,
      activeIcon: PiTextAlignLeftFill,
    },
    {
      name: "Contactus",
      path: "/contact",
      icon: PiPhone,
      activeIcon: PiPhoneFill,
    },
    {
      name: "About",
      path: "/about",
      icon: PiInfo,
      activeIcon: PiInfoFill,
    },
    ...(status === "authenticated"
      ? [
          {
            name: "Logout",
            action: signOut,
            icon: PiSignOut,
            activeIcon: PiSignOutFill,
          },
        ]
      : [
          {
            name: "Login",
            path: "/login",
            icon: PiSignIn,
            activeIcon: PiSignInFill,
          },
        ]),
  ]

  // Filter out any undefined entries
  const validNavLinks = navLinks.filter(Boolean)

  return (
    <div className="grid gap-1">
      {validNavLinks.map((tool) => {
        const isActive = pathname === tool.path
        const Icon = isActive ? tool.activeIcon : tool.icon

        if (tool.name === "Logout") {
          // Render a button for logout
          return (
            <DropdownMenuItem key={tool.name} asChild>
              <button
                onClick={() => tool.action()}
                className="flex px-3 py-2 cursor-pointer text-muted-foreground"
              >
                <Icon className="mr-2 h-4 w-4" />
                {tool.name}
              </button>
            </DropdownMenuItem>
          )
        }

        return (
          <DropdownMenuItem key={tool.name} asChild>
            <Link
              href={tool.path}
              className={`flex px-3 py-2 cursor-pointer ${
                isActive ? "bg-secondary" : "text-muted-foreground"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {tool.name}
            </Link>
          </DropdownMenuItem>
        )
      })}
    </div>
  )
}

export function NavLists() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 pb-2">
        <NavItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
