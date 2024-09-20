import Image from "next/image"
import Link from "next/link"

export default function Card() {
  return (
    <div className=" flex gap-8 items-center">
      <div className="h-[350px] w-[400px] relative  flex-1">
        <Image src="/p1.jpeg" fill className="object-cover " />
      </div>
      <div className="flex-1 space-y-4">
        <div className="space-x-4">
          <span className="">20.2024.11 </span>
          <span className="">Travel</span>
        </div>
        <h1 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
          voluptates numquam cum sit laboriosam explicabo minima dolores sunt
          alias! Modi ducimus voluptas quam eum.
        </p>
        <Link href="/">ReadMore ...</Link>
      </div>
    </div>
  )
}
