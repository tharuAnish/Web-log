import Image from "next/image"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { FaRegCalendarCheck, FaTag } from "react-icons/fa6"
import { Tag } from "lucide-react"
import { Tags } from "lucide-react"

export default function Blog({ data }) {
  return (
    <main
      // style={{ boxShadow: "2px 5px 22px #0003" }}
      className=" py-7 sm:px-2 mx-auto  "
    >
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold  ">{data.title}</h3>
        <div className="flex gap-6 text-sm  text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <FaRegCalendarCheck className="mr-1 h-3 w-3" />
            {new Date(data.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <Link href={`/blog?cat=${data.catSlug}`}>
            <Badge
              variant="secondary"
              className="flex gap-2 cursor-pointer items-center"
            >
              <Tag className=" h-3 w-3" />
              {data.catSlug}
            </Badge>
          </Link>
        </div>
        <Image
          className="w-full h-[420px]  object-cover my-9 sm:mt-8 sm:mb-5"
          src={data.img ? data.img : "/p1.jpeg"}
          alt="Bg Image"
          width={800}
          height={420}
        />
        <div className="text-justify whitespace-pre-line  text-gray-700 dark:text-gray-300">
          <div dangerouslySetInnerHTML={{ __html: data.desc }} />
        </div>
        <hr className="mb-4 mt-10" />
        <div className="space-y-2  text-sm text-gray-500 space-x-2">
          <p className="font-medium ml-2">Author </p>
          <div className="flex items-center gap-2">
            <Image
              src={data?.user.image}
              width={30}
              height={30}
              alt="user avatar"
              className="rounded-full"
            />
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {data?.user.name}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
