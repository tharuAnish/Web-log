import Featured from "@/components/featured/Featured"
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
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 ">
          <h1 className="text-3xl font-bold mt-14 mb-7">Recent Posts</h1>
          <CardList page={page} />
        </div>
        <div className="col-span-4 pl-8  border-l mt-28">
          <Menu page={page} />
        </div>
      </div>
    </div>
  )
}
