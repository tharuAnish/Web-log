import { Button } from "../ui/button"

export default function Pagination() {
  return (
    <div className="flex justify-between mt-6 space-x-4">
      <Button variant="destructive" className="w-24">
        Previous
      </Button>
      <Button variant="destructive" className="w-24">
        Next
      </Button>
    </div>
  )
}
