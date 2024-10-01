"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Toast } from "../ui/toast"

export default function EditBlogModal({ post }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(post.title)
  const [desc, setDesc] = useState(post.desc)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (session?.user?.email !== post.userEmail) {
      Toast({
        title: "Error",
        description: "You are not authorized to edit this post",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    try {
      const res = await fetch(`/api/posts/${post.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      })

      if (res.ok) {
        const updatedPost = await res.json()
        setOpen(false)
        Toast({
          title: "Success",
          description: "Post updated successfully",
        })
        router.refresh()
      } else {
        const errorData = await res.json()
        throw new Error(errorData.message || "Failed to update post")
      }
    } catch (error) {
      console.error("Failed to update post:", error)
      Toast({
        title: "Error",
        description: error.message || "Failed to update post",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (session?.user?.email !== post.userEmail) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
