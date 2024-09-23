import Featured from "@/components/featured/Featured"
import styles from "./homepage.module.css"
import CategoryList from "@/components/categoryList/CategoryList"
import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  // const cat = searchParams.cat || ""
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5">
          <CardList page={page} />
        </div>
        <div className="col-span-2 mt-28">
          <Menu />
        </div>
      </div>
    </div>
  )
}
