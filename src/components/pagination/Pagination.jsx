"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter()

  return (
    <div className="flex justify-between mt-6 space-x-4">
      <Button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        variant="destructive"
        className="w-24 disabled:cursor-not-allowed"
      >
        Previous
      </Button>
      <Button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
        variant="destructive"
        className="w-24 disabled:cursor-not-allowed"
      >
        Next
      </Button>
    </div>
  )
}
