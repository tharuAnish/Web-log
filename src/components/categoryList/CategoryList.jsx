import Link from "next/link"
import Image from "next/image"

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData()
  return (
    <div className="">
      <h1 className="mt-9 mb-8 text-3xl font-bold">Popular Categories</h1>
      <div className=" grid  mx-auto sm:w-auto grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {/* {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-2 capitalize w-1/6 h-20 justify-center rounded-lg ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            {item.title}
          </Link>
        ))} */}
        <Link
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
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex items-center flex-1 gap-5 py-3 pl-4 pr-7  bg-slate-200 capitalize   justify-center rounded-lg `}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-9 w-9"
          />
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex items-center flex-1 gap-5 py-3 pl-4 pr-7  bg-slate-200 capitalize   justify-center rounded-lg `}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-9 w-9"
          />
          culture
        </Link>
        <Link
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
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex items-center flex-1 gap-5 py-3 pl-4 pr-7  bg-slate-200 capitalize   justify-center rounded-lg `}
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-9 w-9"
          />
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex items-center flex-1 gap-5 py-3 pl-4 pr-7  bg-slate-200 capitalize   justify-center rounded-lg `}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-9 w-9"
          />
          culture
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
