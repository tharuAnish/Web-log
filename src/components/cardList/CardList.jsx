import React from "react"
import Pagination from "../pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"

export default function CardList() {
  return (
    <div className="grid-cols-5 ">
      <h1 className="text-3xl font-bold my-12">Recent Posts</h1>
      <div className="space-y-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}
