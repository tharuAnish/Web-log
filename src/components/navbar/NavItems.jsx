"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  PiHouse,
  PiHouseFill,
  PiPhone,
  PiPhoneFill,
  PiInfo,
  PiInfoFill,
} from "react-icons/pi"
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
  const status = "notauthenticated"

  const navLinks = [
    ...(status === "authenticated"
      ? [
          {
            name: "Create",
            path: "/create",
            icon: PiPhone,
            activeIcon: PiPhoneFill,
          },
        ]
      : []),
    {
      name: "Home",
      path: "/",
      icon: PiHouse,
      activeIcon: PiHouseFill,
    },
    {
      name: "Contact",
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
    ...(status === "notauthenticated"
      ? [
          {
            name: "Login",
            path: "/login",
            icon: PiPhone,
            activeIcon: PiPhoneFill,
          },
        ]
      : [
          {
            name: "Logout",
            path: "/logout",
            icon: PiPhone,
            activeIcon: PiPhoneFill,
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

      {/* Add AuthLinks here */}
      {/* <DropdownMenuItem asChild>
        <div className="px-3 py-2 cursor-pointer text-muted-foreground">
          <AuthLinks />
        </div>
      </DropdownMenuItem> */}
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
