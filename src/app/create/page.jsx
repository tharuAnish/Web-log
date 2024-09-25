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

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { app } from "@/utils/firebase"
import { useEffect } from "react"

const storage = getStorage(app)

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

export default function CreateBlog() {
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState("")
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

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  }

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, "images/" + name)
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log("Upload is " + progress + "% done")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break
            case "storage/canceled":
              // User canceled the upload
              break

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL)
            setMedia(downloadURL)
          })
        }
      )
    }
    file && upload()
  }, [file])

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: content,
        img: media,
        slug: slugify(title),
        catSlug: category,
      }),
    })
    console.log("UploadPost", res)
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
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="treavel">Travel</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex space-x-2 mb-4 ">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
            <Button variant="outline" size="icon">
              <label htmlFor="image" className="cursor-pointer">
                <FaRegImage className="h-4 w-4" />
              </label>
            </Button>
            <Button variant="outline" size="icon">
              <FaVideo className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <FaUpload className="h-4 w-4" />
            </Button>
          </div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="h-[500px]  "
          />
          <Button className="mt-4" onClick={handleSubmit}>
            <FaPlus className="mr-2 h-4 w-4" /> Publish Blog
          </Button>
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
