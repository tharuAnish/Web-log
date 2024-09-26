import Featured from "@/components/featured/Featured"
import CategoryList from "@/components/categoryList/CategoryList"
import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"
import { Separator } from "@/components/ui/separator"

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  // const cat = searchParams.cat || ""
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 ">
          <CardList page={page} />
        </div>
        <div className="col-span-4 pl-8  border-l mt-28">
          <Menu />
        </div>
      </div>
    </div>
  )
}
