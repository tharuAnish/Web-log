import MenuPosts from "./MenuPosts"
import MenuCategories from "./MenuCategories"

export default function Menu() {
  return (
    <div className="grid-cols-2">
      <h2 className="text-sm text-opacity-90">{"What's hot"}</h2>
      <h1 className="text-xl font-bold">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-sm text-opacity-90">Discover by topic</h2>
      <h1 className="text-xl font-bold">Categories</h1>
      <MenuCategories />
      <h2 className="text-sm text-opacity-90">Chosen by the editor</h2>
      <h1 className="text-xl font-bold">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}
