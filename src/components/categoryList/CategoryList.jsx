import Link from "next/link"

import { fetchCategories } from "@/action"
import {
  FaLaptopCode,
  FaPlane,
  FaAppleAlt,
  FaHeartbeat,
  FaMoneyBillWave,
  FaUserFriends,
} from "react-icons/fa"

// Map of categories to their respective icons
const categoryIcons = {
  health: <FaHeartbeat />,
  lifestyle: <FaUserFriends />,
  technology: <FaLaptopCode />,
  travel: <FaPlane />,
  food: <FaAppleAlt />,
  finance: <FaMoneyBillWave />,
}

const CategoryList = async () => {
  const categories = await fetchCategories()
  return (
    <div>
      <h1 className="mt-9 mb-7 text-3xl font-bold">Popular Categories</h1>
      <div className="grid mx-auto sm:w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category.slug}`}
            className={`flex items-center flex-1 gap-3 py-3 pl-4 pr-7 border capitalize rounded-lg transition duration-200 hover:bg-secondary`}
          >
            <span className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
              {categoryIcons[category.slug]}
            </span>
            <span className=" font-medium">{category.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
