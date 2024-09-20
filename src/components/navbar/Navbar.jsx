import Image from "next/image"
import { ModeToggle } from "../theme/toggle"
import { NavLists } from "./NavItems"
import { Separator } from "../ui/separator"

export default function Navbar() {
  // Define LetterBox component within Navbar
  const LetterBox = ({ letter }) => {
    return (
      <div className="flex items-center  justify-center bg-black h-8 w-8 rounded-md font-bold text-white">
        {letter}
      </div>
    )
  }

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
            {/* For smaller screens (before sm) */}
            <div className="flex sm:hidden items-center justify-left gap-1">
              <LetterBox letter="W" />
              {/* <span className="text-black font-bold">-</span> */}
              <LetterBox letter="L" />
            </div>

            {/* For sm screens and above */}
            <div className="hidden sm:flex items-center justify-center gap-1">
              {["W", "E", "B"].map((letter, index) => (
                <LetterBox key={index} letter={letter} />
              ))}

              <span className="text-black font-bold">-</span>

              {["L", "O", "G"].map((letter, index) => (
                <LetterBox key={index + 3} letter={letter} />
              ))}
            </div>
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
