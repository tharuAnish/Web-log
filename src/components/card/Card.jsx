import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "../ui/button"
import { FaRegCalendarCheck, FaTags } from "react-icons/fa6"
import { Tag } from "lucide-react"

export default function ImprovedCard({ post }) {
  return (
    <Card className="h-64 overflow-hidden p-[10px]">
      <div className="flex gap-3 h-full">
        {/* Image Section */}
        <div className="basis-2/5 h-full ">
          <div className="h-full overflow-hidden relative rounded">
            <Image
              src={post.img || "/p1.jpeg"}
              alt={post.title}
              fill
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="basis-3/5 py-4 px-2 space-y-2">
          <CardHeader className="p-0">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground ">
              <span className="flex items-center">
                <FaRegCalendarCheck className="mr-1 h-3 w-3" />
                {new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <Link href={`/blog?cat=${post.catSlug}`}>
                <Badge
                  variant="secondary"
                  className="flex gap-2 cursor-pointer items-center"
                >
                  <Tag className=" h-3 w-3" />
                  {post.catSlug}
                </Badge>
              </Link>
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-2 line-clamp-2">
              {post.title}
            </h2>
          </CardHeader>

          <CardContent className="p-0">
            <p
              className="text-muted-foreground  line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.desc }}
            />
          </CardContent>

          <Button variant="link" className="p-0 pt-2">
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
