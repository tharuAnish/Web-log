import Image from "next/image"
import Link from "next/link"

const MenuPosts = ({ withImage }) => {
  return (
    <div className="mt-8 mb-14 flex flex-col gap-8">
      {/* Post 1 */}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative shrink-0 w-16 h-16">
            <Image
              src="/p1.jpeg"
              alt="Post Image 1"
              fill
              className="rounded-full  object-cover border-2"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-1">
          <span className="py-1 px-4 w-max text-white rounded-full bg-red-300">
            Travel
          </span>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-opacity-90 text-sm">
            <span>John Doe</span>
            <span> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      {/* Post 2 */}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative shrink-0 w-16 h-16">
            <Image
              src="/p1.jpeg"
              alt="Post Image 2"
              fill
              className="rounded-full object-cover border-2"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-1">
          <span className="py-1 px-4 w-max text-white rounded-full bg-red-300">
            Travel
          </span>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-opacity-90 text-sm">
            <span>John Doe</span>
            <span> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      {/* Post 3 */}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative shrink-0 w-16 h-16">
            <Image
              src="/p1.jpeg"
              alt="Post Image 3"
              fill
              className="rounded-full object-cover border-2"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-1">
          <span className="py-1 px-4 w-max text-white rounded-full bg-yellow-300">
            Culture
          </span>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-opacity-90 text-sm">
            <span>John Doe</span>
            <span> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      {/* Post 4 */}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative shrink-0 w-16 h-16">
            <Image
              src="/p1.jpeg"
              alt="Post Image 4"
              fill
              className="rounded-full object-cover border-2"
            />
          </div>
        )}
        <div className=" flex-4 flex flex-col gap-1">
          <span className="py-1 px-4 bg-green-300 w-max text-white rounded-full ">
            Fashion
          </span>
          <h3 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-opacity-90 text-sm">
            <span>John Doe</span>
            <span> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts
