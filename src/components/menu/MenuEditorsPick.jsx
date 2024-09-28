import Image from "next/image"
import Link from "next/link"

const MenuEditorsPick = () => {
  const posts = [
    {
      id: 1,
      title: "Exploring the Mountains: A Journey into the Wild",
      category: "Travel",
      author: "Alice Johnson",
      date: "09.15.2023",
      image: "/p1.jpeg",
    },
    {
      id: 2,
      title: "Discovering Ancient Cultures: A Trip to Asia",
      category: "Travel",
      author: "Bob Williams",
      date: "08.22.2023",
      image: "/p1.jpeg",
    },
    {
      id: 3,
      title: "The Evolution of Art: From Classical to Modern",
      category: "Culture",
      author: "Catherine Lee",
      date: "07.30.2023",
      image: "/p1.jpeg",
    },
    {
      id: 4,
      title: "Fashion Trends 2024: What's Hot and What's Not",
      category: "Fashion",
      author: "David Kim",
      date: "09.10.2023",
      image: "/p1.jpeg",
    },
  ]

  return (
    <div>
      <h2 className="text-sm text-opacity-90">Chosen by the editor</h2>
      <h1 className="text-xl font-bold">Editors Pick</h1>
      <div className="flex flex-col gap-8 mt-4">
        {posts.map((post) => (
          <div key={post.id}>
            <p className="py-1 ml-20 mb-1 text-sm px-4 w-max rounded-full bg-secondary">
              {post.category}
            </p>
            <Link href="/" className="flex items-center gap-5">
              <div className="relative shrink-0 w-16 h-16">
                <Image
                  src={post.image}
                  alt={`Post Image ${post.id}`}
                  fill
                  className="rounded-full object-cover border-2"
                />
              </div>
              <div className="flex-4 flex flex-col gap-1">
                <h3 className="font-bold">{post.title}</h3>
                <div className="text-opacity-90 text-sm">
                  <span>{post.author}</span>
                  <span> - {post.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuEditorsPick
