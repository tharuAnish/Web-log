import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
import { authOptions } from "@/app/api/[...nextAuth]/route"
import { auth } from "@/utils/auth"

// Get single post
export const GET = async (req, { params }) => {
  const { slug } = params

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    )
  }
}

// UPDATE a post
export const PUT = async (req, { params }) => {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        { status: 401 }
      )
    }

    const { slug } = params
    const body = await req.json()

    // Log the received data
    console.log("Received update request for slug:", slug)
    console.log("Update data:", body)

    const post = await prisma.post.update({
      where: {
        slug: slug,
        userEmail: session.user.email,
      },
      data: body,
    })

    console.log("Updated post:", post)

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    console.error("Error updating post:", err)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", error: err.message }),
      { status: 500 }
    )
  }
}

// DELETE a post
export const DELETE = async (req, { params }) => {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        { status: 401 }
      )
    }

    const { slug } = params

    // Use a transaction to delete comments and then the post
    const result = await prisma.$transaction(async (prisma) => {
      // Delete all comments associated with the post
      await prisma.comment.deleteMany({
        where: {
          postSlug: slug,
        },
      })

      // Delete the post
      const deletedPost = await prisma.post.deleteMany({
        where: {
          slug: slug,
          userEmail: session.user.email,
        },
      })

      return deletedPost
    })

    if (result.count === 0) {
      return new NextResponse(
        JSON.stringify({
          message: "Post not found or you're not authorized to delete it.",
        }),
        { status: 404 }
      )
    }

    return new NextResponse(
      JSON.stringify({ message: "Post deleted successfully" }),
      { status: 200 }
    )
  } catch (err) {
    console.error("Error deleting post:", err)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", error: err.message }),
      { status: 500 }
    )
  }
}
