import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
import { auth } from "@/utils/auth"

export const GET = async (req) => {
  const { searchParams } = new URL(req.url)

  const page = searchParams.get("page")
  const cat = searchParams.get("cat")
  const sortByViews = searchParams.get("sortByViews") === "true"

  const POST_PER_PAGE = 4

  // Base query object
  const query = {
    take: POST_PER_PAGE,
    skip: page ? POST_PER_PAGE * (page - 1) : 0, // Skip posts based on the page if page exists
    where: {
      ...(cat && { catSlug: cat }), // Filter by category if provided
    },
  }

  // Sort by number of views if sortByViews is true
  if (sortByViews) {
    query.orderBy = {
      views: "desc",
    }
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ])

    return NextResponse.json({ posts, count }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}

// CREATE A POST
export const POST = async (req) => {
  const session = await auth()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    )
  }

  try {
    const body = await req.json()
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    )
  }
}
