"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaPlus, FaRegImage, FaUpload, FaVideo } from "react-icons/fa6"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ]

  const handleImageUpload = () => {
    // Implement image upload logic here
    console.log("Image upload clicked")
  }

  const handleVideoUpload = () => {
    // Implement video upload logic here
    console.log("Video upload clicked")
  }

  const handleFileUpload = () => {
    // Implement file upload logic here
    console.log("File upload clicked")
  }

  return (
    <div className="container mx-auto p-4 mt-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Create a Blog Post</h1>
      <Tabs defaultValue="write" className="w-full ">
        <TabsList className="mb-5">
          <TabsTrigger value="write" className="w-[180px]">
            Write a Blog
          </TabsTrigger>
          <TabsTrigger value="preview" className="w-[180px]">
            Preview Blog
          </TabsTrigger>
        </TabsList>
        <TabsContent value="write" className="space-y-4 mb-20 ">
          <Button className="">
            <FaPlus className="mr-2 h-4 w-4" /> Publish Blog
          </Button>
          <Input
            type="text"
            placeholder="Enter your blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl font-medium py-6"
          />
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* <div className="flex space-x-2 mb-4 ">
            <Button onClick={handleImageUpload} variant="outline" size="icon">
              <FaRegImage className="h-4 w-4" />
            </Button>
            <Button onClick={handleVideoUpload} variant="outline" size="icon">
              <FaVideo className="h-4 w-4" />
            </Button>
            <Button onClick={handleFileUpload} variant="outline" size="icon">
              <FaUpload className="h-4 w-4" />
            </Button>
          </div> */}
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="h-[500px]  "
          />
          {/* <Button className="mt-4">
            <FaPlus className="mr-2 h-4 w-4" /> Publish Blog
          </Button> */}
        </TabsContent>
        <TabsContent value="preview" className="space-y-4">
          <h2 className="text-2xl font-bold">
            {title ? (
              title
            ) : (
              <span className="text-muted-foreground font-medium">
                Write a blog to see the preview ...
              </span>
            )}
          </h2>
          {category && (
            <p className="text-sm text-gray-500">Category: {category}</p>
          )}
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose max-w-none"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
