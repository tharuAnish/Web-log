import Image from "next/image"
import { FaTags } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md"
import Comments from "../comments/Comments"

export default function Blog({ data }) {
  return (
    <main
      // style={{ boxShadow: "2px 5px 22px #0003" }}
      className=" py-7 sm:px-2 mx-auto  mr-8"
    >
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold  ">{data.title}</h3>
        <div className="flex gap-6 text-sm  text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <MdDateRange />
            15 March 2024
          </p>
          <p className="flex items-center gap-2">
            <FaTags />
            {/* {blog.categories.join(", ")} */} WebDevelopment, Nextjs
          </p>
        </div>
        <Image
          className="w-full h-[420px]  object-cover my-9 sm:mt-8 sm:mb-5"
          src="/p1.jpeg"
          alt="lorem"
          width={800}
          height={420}
        />
        <div className="text-justify whitespace-pre-line px-2 text-gray-700 dark:text-gray-300">
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
      <Comments />
    </main>
  )
}
