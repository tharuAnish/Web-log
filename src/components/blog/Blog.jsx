import Image from "next/image"
import { FaTags } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md"

export default function Blog() {
  return (
    <main
      // style={{ boxShadow: "2px 5px 22px #0003" }}
      className=" py-7 sm:px-2 mx-auto  mr-8"
    >
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </h3>
        <div className="flex gap-6 text-sm  text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <MdDateRange />
            15 March 2024
          </p>
          <p className="flex items-center gap-2">
            <FaTags />
            {/* {blog.categories.join(", ")} */} WebDevelopment, Nextjs
          </p>
        </div>
        <Image
          className="w-full h-[450px]  object-cover my-9 sm:mt-8 sm:mb-5"
          src="/p1.jpeg"
          alt="lorem"
          width={800}
          height={700}
        />
        <div className="text-justify whitespace-pre-line px-2 text-gray-700 dark:text-gray-300">
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur tempora, repellendus perferendis iusto veritatis
            reprehenderit! Illum dignissimos ex minus facere nemo provident
            repellat odit cumque.
          </strong>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            similique ipsum aspernatur quisquam perspiciatis, pariatur quae
            ducimus praesentium. Molestias accusamus nostrum quia exercitationem
            quod quaerat doloremque quidem tenetur vel labore aut quae fugit
            explicabo alias doloribus, ex rerum aspernatur quasi consequuntur
            reiciendis iste a, beatae quisquam laboriosam. Eligendi beatae
            reiciendis blanditiis, pariatur optio laboriosam aperiam
            reprehenderit qui numquam voluptas consectetur sit repudiandae
            officiis neque quod. Quisquam aspernatur, repellat laborum maxime
            illo rem tempore, labore cupiditate fugit amet eveniet, a vel
            blanditiis inventore alias numquam consequatur et quod! Corporis
            culpa sequi dignissimos quam. Repellat necessitatibus dolore quia
            recusandae eaque debitis odio nam assumenda aspernatur officiis eius
            est, incidunt voluptatum sed, pariatur temporibus aliquid expedita
            totam eligendi ab aliquam laudantium esse ipsa error. Aliquid in
            iste eaque, officiis rerum cum similique nulla tenetur quo
            perferendis odio non eum explicabo corrupti cumque perspiciatis.
            Sapiente ad saepe praesentium eaque recusandae, ullam illum,
            eligendi, repellendus magni consequuntur neque repellat. Laborum
            illo ipsam earum rerum quis velit? Eaque saepe tenetur et
            repellendus pariatur rem iusto, possimus laudantium mollitia quasi
            doloremque voluptatem aliquam deleniti impedit laborum autem aut
            minima officia omnis. Voluptate reiciendis itaque unde nisi
            asperiores fugiat similique cupiditate fuga nostrum architecto?
            Beatae deserunt iusto libero!
          </p>
          <p>
            dolor sit amet consectetur adipisicing elit. Possimus id beatae nam
            ex unde distinctio libero impedit perferendis ipsum excepturi
            dolorem repudiandae, autem dolor adipisci nemo nobis illum esse.
            Pariatur ipsum accusamus culpa repellat accusantium iusto assumenda
            asperiores eaque cum quae numquam dolore harum ullam molestias
            neque, voluptatem incidunt eius.
          </p>
          <p>
            dolor sit amet consectetur adipisicing elit. Possimus id beatae nam
            ex unde distinctio libero impedit perferendis ipsum excepturi
            dolorem repudiandae, autem dolor adipisci nemo nobis illum esse.
            Pariatur ipsum accusamus culpa repellat accusantium iusto assumenda
            asperiores eaque cum quae numquam dolore harum ullam molestias
            neque, voluptatem incidunt eius.
          </p>
        </div>
        <hr className="mb-4 mt-10" />
        <p className="flex justify-end text-sm mr-2 text-gray-500 ">
          Author: Namo Anish
        </p>
      </div>
    </main>
  )
}
