import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"

export default function Blogs({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div>
      {/* <h1 className="mt-11 font-semibold text-3xl w-max pb-2 border-b-4 border-black">
        Blog Lists
      </h1> */}
      <h1 className="mt-11 capitalize font-semibold text-3xl w-full py-3 text-center border rounded-lg">
        {cat} Blog
      </h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 ">
          <CardList page={page} cat={cat} />
        </div>
        <div className="col-span-4 pl-8  border-l mt-28">
          <Menu />
        </div>
      </div>
    </div>
  )
}
