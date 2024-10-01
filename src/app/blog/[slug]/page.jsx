import { SessionProvider } from "next-auth/react"

import Blog from "@/components/blog/Blog"
import Comments from "@/components/comments/Comments"
import Menu from "@/components/menu/Menu"

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

export default async function BlogPage({ params }) {
  const { slug } = params
  const data = await getData(slug)

  return (
    <SessionProvider>
      <div>
        <div className="grid mt-5 grid-cols-12 gap-8">
          <div className="col-span-8 ">
            <Blog data={data} />
            <Comments postSlug={slug} />
          </div>
          <div className="col-span-4 pl-8 border-l mt-28">
            <Menu />
          </div>
        </div>
      </div>
    </SessionProvider>
  )
}
