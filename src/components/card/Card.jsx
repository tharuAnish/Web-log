import Image from "next/image"
import Link from "next/link"

export default function Card({ post }) {
  const truncatedDesc =
    post.desc.split(" ").slice(0, 40).join(" ") +
    (post.desc.split(" ").length > 40 ? " ..." : "")
  return (
    <div key={post.id} className=" flex gap-8 items-center">
      <div className="h-[350px] w-[400px] relative  flex-1">
        <Image src="/p1.jpeg" alt="card-image" fill className="object-cover " />
      </div>
      <div className="flex-1 space-y-4">
        <div className="space-x-4">
          <span className="">{post.createdAt.substring(0, 10)} - </span>
          <span className="">{post.catSlug}</span>
        </div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: truncatedDesc }} />
        <Link href={`/blog/${post.slug}`}>ReadMore ...</Link>
      </div>
    </div>
  )
}
