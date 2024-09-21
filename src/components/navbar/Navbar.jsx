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

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between  py-4">
        {/* Social Icons */}
        <div className="hidden sm:flex flex-1 items-center gap-4">
          <FaLinkedin className="h-5 w-5" />
          <FaXTwitter className="h-5 w-5" />
          <FaGlobe className="h-5 w-5" />
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
