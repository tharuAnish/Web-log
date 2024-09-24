import Blog from "@/components/blog/Blog"
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
    <div>
      <h1>Blog </h1>
      <div className="grid grid-cols-7 gap-2">
        <div className="col-span-5">
          <Blog data={data} />
        </div>
        <div className="col-span-2 mt-16">
          <Menu />
        </div>
      </div>
    </div>
  )
}
