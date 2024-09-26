import Image from "next/image"
import { ModeToggle } from "../theme/toggle"
import { NavLists } from "./NavItems"
import { Separator } from "../ui/separator"
import Logo from "./Logo"
import {
  FaGlobe,
  FaLinkedin,
  FaSquareTwitter,
  FaXTwitter,
} from "react-icons/fa6"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between  py-4">
        {/* Social Icons */}
        <div className="hidden sm:flex flex-1 items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/tharuanish/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/anish_namo"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://tharuanish.vercel.app/#resume"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <FaGlobe className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex-1 text-left sm:text-center text-xl font-bold">
          <div className="flex items-center justify-start sm:justify-center gap-1">
            <Logo />
          </div>
        </div>

        {/* Mode Toggle and Nav List */}
        <div className="flex flex-1 justify-end gap-4 items-center">
          <ModeToggle />
          <NavLists />
        </div>
      </div>
      <Separator />
    </nav>
  )
}
