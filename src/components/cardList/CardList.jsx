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
  const posts = await getData(page)
  return (
    <div className="grid-cols-5 ">
      <h1 className="text-3xl font-bold my-12">Recent Posts</h1>
      <div className="space-y-9">
        {posts?.map((post) => (
          <Card post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}
