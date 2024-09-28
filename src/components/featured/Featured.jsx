import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const Featured = () => {
  return (
    <div className="h-[calc(100vh-68px)]  flex items-center">
      <div>
        <h1 className="text-6xl text-center">
          <b>Hey, web loggers here!</b> Discover here the stories and creative
          ideas.
        </h1>
        <div className="mt-5 flex items-center justify-center mx-auto gap-12 lg:max-w-[92%]">
          <div className="flex-1 relative  h-[400px] dark:invert ">
            <Image
              src="/hero.png"
              alt="Hero Image"
              loading="lazy"
              fill
              className="object-contain "
              style={{
                filter: "drop-shadow(2px 5px 22px rgba(0, 0, 0, 0.199))",
              }}
            />
          </div>
          <div className="flex-1  -mt-10">
            <h1 className="text-3xl font-bold">
              Explore. Engage. Express.
              {/* Discover, Learn and Write Write Your Own Story */}
            </h1>
            <p className=" font-light text-muted-foreground my-3">
              Discover insights across a variety of categories, from tech to
              lifestyle. Unleash your creativity by sharing your unique ideas,
              experiences, and stories with a vibrant community eager to
              connect, learn, and be inspired by your creativity.
            </p>
            <div className="flex gap-4 mt-1">
              <Link href="/create">
                <Button>Create New Blog</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">Browse All Blogs</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
