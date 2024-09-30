import Link from "next/link"
import { FaGithub, FaGlobe, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import Logo from "./Logo"
import { Button } from "../ui/button"

const SocialIcon = ({ href, label, Icon }) => (
  <Link
    className="text-gray-700 transition hover:text-gray-700/75"
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
  >
    <Icon className="size-6" />
  </Link>
)

const FooterLink = ({ href, label }) => (
  <Link
    className="text-muted-foreground hover:underline transition"
    href={href}
  >
    {label}
  </Link>
)

export default function Footer() {
  return (
    <footer className="mt-6 lg:mt-14">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 py-3 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-5 py-3 text-sm font-medium transition">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 mb-9 grid grid-cols-1 gap-8 lg:grid-cols-10 lg:gap-32">
          <div className="mx-auto lg:col-span-6 max-w-sm lg:max-w-none">
            <Logo />
            <p className="mt-4 text-center text-base text-muted-foreground lg:text-left">
              Discover insights across a variety of categories, from tech to
              lifestyle. Unleash your creativity by sharing your unique ideas,
              experiences, and stories with a vibrant community eager to
              connect, learn, and be inspired by your creativity.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <SocialIcon
                href="https://www.linkedin.com/in/tharuanish/"
                label="Dribbble"
                Icon={FaLinkedin}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                href="https://github.com/tharuAnish"
                label="GitHub"
                Icon={FaGithub}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                href="https://tharuanish.vercel.app/#resume"
                label="Portfolio"
                Icon={FaGlobe}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                href="https://x.com/anish_namo"
                label="Twitter"
                Icon={FaXTwitter}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:col-span-4 gap-5 text-center  lg:grid-cols-2 lg:text-left">
            <div>
              <strong className="font-medium text-secondary-foreground">
                Categories
              </strong>
              <div className="mt-3 flex flex-col text-sm space-y-[5px]">
                <FooterLink
                  href="/blog?cat=health"
                  label="Health"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/blog?cat=technology"
                  label="Technology"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/blog?cat=travel"
                  label="Travel"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/blog?cat=food"
                  label="Food"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/blog?cat=finance"
                  label="Finance"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>

            <div>
              <strong className="font-medium">Links</strong>
              <div className="mt-3 flex flex-col space-y-[5px] text-sm">
                <FooterLink
                  href="/"
                  label="Home"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/create"
                  label="Create Blog"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/blog"
                  label="All Blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/contact"
                  label="Contact Us"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <FooterLink
                  href="/about"
                  label="About Us"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © Company {new Date().getFullYear()}. Designed and developed by{" "}
            <Link
              href="https://www.linkedin.com/in/tharuanish/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              tharuAnish
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
