import CardList from "@/components/cardList/CardList"
import CategorySelect from "@/components/categoryList/CategorySelect"
import Menu from "@/components/menu/Menu"

export default function Blogs({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 ">
          <div className="flex justify-between items-center mt-11 mb-6">
            <h1 className="capitalize font-semibold text-3xl w-full py-3">
              {cat ? cat : <span>All</span>} Blogs
            </h1>
            <CategorySelect />
          </div>
          <CardList page={page} cat={cat} />
        </div>
        <div className="col-span-4 pl-8 border-l mt-28">
          <Menu />
        </div>
      </div>
    </div>
  )
}
