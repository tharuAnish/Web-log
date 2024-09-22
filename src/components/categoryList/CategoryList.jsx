import Link from "next/link"
import Image from "next/image"
import { fetchCategories } from "@/action"

const CategoryList = async () => {
  const categories = await fetchCategories()
  return (
    <div className="">
      <h1 className="mt-9 mb-8 text-3xl font-bold">Popular Categories</h1>
      <div className=" grid  mx-auto sm:w-auto grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href="/blog?cat=style"
            className={`flex items-center flex-1 gap-5 py-3 pl-4 pr-7  bg-slate-200 capitalize   justify-center rounded-lg `}
          >
            <Image
              src="/fashion.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full h-9 w-9"
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
