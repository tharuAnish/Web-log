import MenuPosts from "./MenuTopPosts"
import MenuCategories from "./MenuCategories"
import MenuEditorsPick from "./MenuEditorsPick"
import { Separator } from "../ui/separator"

export default function Menu() {
  return (
    <div className="grid-cols-2 space-y-8">
      <MenuPosts />
      <Separator className="w-11/12 mx-auto" />
      <MenuCategories />
      <Separator className="w-11/12 mx-auto" />
      <MenuEditorsPick />
    </div>
  )
}
