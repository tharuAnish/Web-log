import React from "react"
import Pagination from "../pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"

const getData = async ({ page, cat }) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData({ page, cat })
  console.log("Posts_data", posts, "Count", count)

  const POST_PER_PAGE = 4

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className="grid-cols-5 ">
      {/* <h1 className="text-3xl font-bold mt-14 mb-7">Recent Posts</h1> */}
      <div className="flex flex-col gap-y-7">
        {posts?.map((item) => (
          <Card post={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}
export default CardList
