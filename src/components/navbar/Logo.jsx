import Link from "next/link"
import React from "react"

export default function Logo() {
  // Define LetterBox component within Navbar
  const LetterBox = ({ letter }) => {
    return (
      <div className="flex items-center  justify-center bg-black h-8 w-8 rounded-md font-bold text-white">
        {letter}
      </div>
    )
  }
  return (
    <Link href="/">
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
    </Link>
  )
}
