import Image from "next/image"
import { Button } from "../ui/button"

const Featured = () => {
  return (
    <div className="min-h-screen mt-11">
      <h1 className="text-7xl">
        <b>Hey, web loggers here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-14 flex items-center gap-12">
        <div className="flex-1 h-[400px]  relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-sm font-light opacity-95 my-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured
