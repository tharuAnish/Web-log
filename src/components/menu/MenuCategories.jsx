import Link from "next/link"

const MenuCategories = () => {
  return (
    <div className="mt-9 mb-14 flex flex-wrap gap-3">
      <Link href="/blog?cat=style" className="">
        Style
      </Link>
      <Link href="/blog" className="py-2 px-6 bg-slate-300 rounded-lg">
        Fashion
      </Link>
      <Link href="/blog" className="py-2 px-6 bg-yellow-300 rounded-lg">
        Food
      </Link>
      <Link href="/blog" className="py-2 px-6 bg-purple-300 rounded-lg">
        Travel
      </Link>
      <Link href="/blog" className="py-2 px-6 bg-red-300 rounded-lg">
        Culture
      </Link>
      <Link href="/blog" className="py-2 px-6 bg-indigo-300 rounded-lg">
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories
