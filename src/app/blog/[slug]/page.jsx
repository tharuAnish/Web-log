import Blog from "@/components/blog/Blog"
import Menu from "@/components/menu/Menu"

export default function BlogPage({ params }) {
  const blog = params.slug
  return (
    <div>
      <h1>Blog {blog}</h1>
      <div className="grid grid-cols-7 gap-2">
        <div className="col-span-5">
          <Blog />
        </div>
        <div className="col-span-2 mt-16">
          <Menu />
        </div>
      </div>
    </div>
  )
}
