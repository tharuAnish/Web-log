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

const MenuCategories = async () => {
  const categories = await fetchCategories()
  return (
    <div>
      <h2 className="text-sm text-muted-foreground">Discover by topic</h2>
      <h1 className="text-xl font-bold">Categories</h1>

      <div className="flex flex-wrap gap-2 mt-4">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category.slug}`}
            className={`flex items-center text-opacity-80 gap-2 py-[6px] pl-4 pr-5 text-secondary-foreground border capitalize rounded-full transition duration-200 hover:bg-secondary`}
          >
            <span className="h-6 w-6 flex-shrink-0 flex items-center opacity-70 justify-center">
              {categoryIcons[category.slug]}
            </span>
            <span className=" text-sm">{category.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MenuCategories
