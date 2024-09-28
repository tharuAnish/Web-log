import React from "react"

export default function Logo() {
  // Define LetterBox component within Navbar
  const LetterBox = ({ letter }) => {
    return (
      <div className="flex items-center  justify-center dark:font-extrabold dark:bg-white bg-black h-8 w-8 rounded-md font-bold text-white">
        {letter}
      </div>
    )
  }
  return (
    <div className="flex items-center justify-left gap-1">
      {["W", "E", "B"].map((letter, index) => (
        <LetterBox key={index} letter={letter} />
      ))}

      <span className="text-black dark:text-white font-bold">-</span>

      {["L", "O", "G"].map((letter, index) => (
        <LetterBox key={index + 3} letter={letter} />
      ))}
    </div>
  )
}
