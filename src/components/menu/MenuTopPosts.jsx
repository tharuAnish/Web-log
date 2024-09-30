import Link from "next/link"
import { FaRegCalendarCheck, FaRegEye } from "react-icons/fa6"
import { Badge } from "../ui/badge"
import { Tag } from "lucide-react"

// Fetch the top posts sorted by views
const getTopPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?sortByViews=true`,
    {
      cache: "no-store", // Disable caching
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch top posts")
  }

  return res.json()
}

const MenuTopPosts = async () => {
  // try {
  const { posts } = await getTopPosts() // Fetch top posts from the API
  console.log("TopPosts", posts)

  return (
    <div>
      <h2 className="text-sm text-opacity-90">{"What's hot"}</h2>
      <h1 className="text-xl font-bold">Most Popular</h1>
      <div className="mt-4 flex flex-col gap-5">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center gap-5">
            <div className="flex-4 flex flex-col gap-1">
              <div className="flex items-center  space-x-4 text-xs text-muted-foreground ">
                <span className="flex items-center">
                  <FaRegCalendarCheck className="mr-1 h-3 w-3" />
                  {new Date(post.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <Badge variant="primary">
                  <Link
                    href={`/blog?cat=${post.catSlug}`}
                    className="flex gap-2 items-center"
                  >
                    <Tag className=" h-3 w-3" />
                    {post.catSlug}
                  </Link>
                </Badge>
                <div
                  variant="primary "
                  className="flex py-[2px] px-2 border rounded-full items-center gap-1"
                >
                  <FaRegEye />
                  <span>{post.views}</span>
                </div>
              </div>
              <Link href={`/post/${post.slug}`}>
                <h3 className="font-bold hover:underline">{post.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  // } catch (error) {
  //   console.error("Error loading top posts:", error)
  //   return <p>Failed to load posts</p>
  // }
}

export default MenuTopPosts
