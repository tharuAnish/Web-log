"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CategorySelect() {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories")
      const data = await res.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams)
    if (value === "all") {
      params.delete("cat")
    } else {
      params.set("cat", value)
    }
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <Select
      onValueChange={handleCategoryChange}
      defaultValue={searchParams.get("cat") || "all"}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.slug}>
            {category.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
