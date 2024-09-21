import Image from "next/image"
import { ModeToggle } from "../theme/toggle"
import { NavLists } from "./NavItems"
import { Separator } from "../ui/separator"
import Logo from "./Logo"

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between  py-3">
        {/* Social Icons */}
        <div className="hidden sm:flex flex-1 gap-2">
          <Image
            src="/facebook.png"
            alt="facebook-icon"
            height={24}
            width={24}
          />
          <Image
            src="/instagram.png"
            alt="instagram-icon"
            height={24}
            width={24}
          />
          <Image src="/youtube.png" alt="youtube-icon" height={24} width={24} />
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
