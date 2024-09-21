import Link from "next/link"
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import Logo from "./Logo"
import { Button } from "../ui/button"

export default function Footer() {
  return (
    <footer className="mt-6">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold  sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 py-3 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <Button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full  px-5 py-3 text-sm font-medium  transition ">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 mb-9 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <Logo />
            <p className="mt-4 text-center  lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center items-center gap-4 lg:justify-start">
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <FaFacebook className="size-6" />
              </Link>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <FaInstagram className="size-6" />
              </a>

              <a
                className="text-gray-700 transition items-center hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <FaTwitter className="size-6" />
              </a>

              <a
                className="text-gray-700 transition items-center hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>
                <FaGithub className="size-6" />
              </a>

              <a
                className="text-gray-700 transition items-center hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Dribbble </span>
                <FaDribbble className="size-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-secondary-foreground">
                Services
              </strong>
              <div className="mt-4 space-y-1 flex flex-col">
                <a className="text-muted-foreground" href="#">
                  Marketing
                </a>
                <a className="text-muted-foreground" href="#">
                  Graphic Design
                </a>
                <a className="text-muted-foreground" href="#">
                  App Development
                </a>
                <a className="text-muted-foreground" href="#">
                  Web Development
                </a>
              </div>
            </div>

            <div>
              <strong className="font-medium "> About </strong>
              <div className="mt-4 space-y-1 flex flex-col">
                <a className="text-muted-foreground" href="#">
                  About
                </a>
                <a className="text-muted-foreground" href="#">
                  Careers
                </a>
                <a className="text-muted-foreground" href="#">
                  History
                </a>
                <a className="text-muted-foreground" href="#">
                  Our Team
                </a>
              </div>
            </div>

            <div>
              <strong className="font-medium "> Support </strong>
              <div className="mt-4 space-y-1 flex flex-col ">
                <a className="text-muted-foreground" href="#">
                  FAQs
                </a>
                <a className="text-muted-foreground" href="#">
                  Contact
                </a>
                <a className="text-muted-foreground" href="#">
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t  pt-6">
          <p className="text-center text-xs/relaxed text-muted-foreground">
            © Company 2022. All rights reserved.
            {/* <br />
            Created with
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              Laravel
            </a>
            and
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              Laravel Livewire
            </a>
            . */}
          </p>
        </div>
      </div>
    </footer>
  )
}
