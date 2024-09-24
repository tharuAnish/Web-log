"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import useSWR from "swr"
import { useSession } from "next-auth/react"

const fetcher = async (url) => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return data
}

export default function Comments({ postSlug }) {
  const { status } = useSession()

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  console.log("CommentData", data)
  console.log("postSlug", postSlug)

  return (
    <div className=" mt-14 ">
      {/* Comment Input */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Comment</h2>
        {status === "authenticated" ? (
          <>
            <textarea
              className="w-full p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground"
              rows="3"
              placeholder="Write your comment..."
              // value={newComment}
              // onChange={(e) => setNewComment(e.target.value)}
            />
            <Button className="mt-3 ">Post Comment</Button>
          </>
        ) : (
          <Link href="/login" className="">
            Login to write a comment
          </Link>
        )}
      </div>

      {/* Display Comments */}
      <div className="space-y-6">
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          data?.map((comment) => (
            <div key={comment.id}>
              <div className="flex gap-4 items-center">
                <div className="relative shrink-0 w-12 h-12">
                  <Image
                    src={comment.user.image}
                    alt="Post Image 1"
                    fill
                    className="rounded-full  object-cover border-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{comment.user.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2  text-muted-foreground">{comment.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
