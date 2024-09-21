"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "John Doe",
      date: "10.03.2023",
      comment:
        "This is a mock comment! Loving the post.Consequuntur tempora, repellendus perferendis iusto veritatis reprehenderit! Illum dignissimos ex minus facere nemo provident repellat odit cumque.",
    },
    {
      id: 2,
      user: "Jane Smith",
      date: "11.03.2023",
      comment:
        "Another comment, very informative. Thanks!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique ipsum aspernatur quisquam perspiciatis, pariatur quae",
    },
  ])

  const [newComment, setNewComment] = useState("")

  const status = "authenticated"

  const handlePostComment = () => {
    if (newComment.trim() === "") return

    const newCommentObj = {
      id: comments.length + 1,
      user: "Mock User", // You can replace this with an actual logged-in user's name.
      date: new Date().toLocaleDateString(),
      comment: newComment,
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
  }

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
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button className="mt-3 " onClick={handlePostComment}>
              Post Comment
            </Button>
          </>
        ) : (
          <Link href="/login" className="">
            Login to write a comment
          </Link>
        )}
      </div>

      {/* Display Comments */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex gap-4">
              <div className="relative shrink-0 w-12 h-12">
                <Image
                  src="/p1.jpeg"
                  alt="Post Image 1"
                  fill
                  className="rounded-full  object-cover border-2"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{comment.user}</h3>
                    <p className="text-xs text-muted-foreground">
                      {comment.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
