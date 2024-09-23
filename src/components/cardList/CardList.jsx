import React from "react"
import Pagination from "../pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}
export default async function CardList({ page }) {
  const { posts, count } = await getData(page)
  console.log("Posts_data", posts, "Count", count)

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className="grid-cols-5 ">
      <h1 className="text-3xl font-bold my-12">Recent Posts</h1>
      <div className="space-y-9">
        {posts?.map((item) => (
          <Card post={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}
