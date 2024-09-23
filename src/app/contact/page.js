import { fetchCategories } from "@/action"

export default async function Contact() {
  const categories = await fetchCategories()

  console.log("Categories", categories)

  return (
    <div>
      <h1>Categories :</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </div>
  )
}
