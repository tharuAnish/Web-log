import Link from "next/link"

const MenuTopPosts = () => {
  // Sample data similar to real posts
  const posts = [
    {
      id: 1,
      category: "Travel",
      title: "Sustainable Travel: How to Explore the World Responsibly",
      author: "Jane Smith",
      date: "09.15.2023",
      link: "/post/1",
    },
    {
      id: 2,
      category: "health",
      title: "The Importance of Mental Health in Achieving Overall Wellness",
      author: "Michael Johnson",
      date: "08.22.2023",
      link: "/post/2",
    },
    {
      id: 3,
      category: "Culture",
      title: "Understanding Japan's Rich Cultural Heritage",
      author: "Emily Brown",
      date: "07.10.2023",
      link: "/post/3",
    },
    {
      id: 4,
      category: "Fashion",
      title: "The Rise of Sustainable Fashion in 2023",
      author: "Chris Wilson",
      date: "06.25.2023",
      link: "/post/4",
    },
  ]

  return (
    <div>
      <h2 className="text-sm text-opacity-90">{"What's hot"}</h2>
      <h1 className="text-xl font-bold">Most Popular</h1>
      <div className="mt-4 flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            href={post.link}
            key={post.id}
            className="flex items-center gap-5"
          >
            <div className="flex-4 flex flex-col gap-1">
              <span className="py-1 text-sm px-4 w-max rounded-full bg-secondary">
                {post.category}
              </span>
              <h3 className="font-bold">{post.title}</h3>
              <div className="text-opacity-90 text-sm">
                <span>{post.author}</span>
                <span> - {post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MenuTopPosts
