import { fetchProject } from "@/actions/actions"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import ScrollTicker from "@/components/animations/ScrollTicker"
import ContactSection from "@/components/home/ContactSection"
import LatestProjectsWrapper from "@/components/home/LatestProjectsWrapper"
import Reorder from "@/components/home/Reorder"
import { Button } from "@/components/ui/button"
import { ProjectProps } from "@/utils/type"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Krisapat Portfolio | Home",
  description: "Krisapat Portfolio Home Page",
};
const headImages = [
  "/img/head/head1.png",
  "/img/head/head2.png",
  "/img/head/head3.png",
  "/img/head/head4.png",
]
const Page = async () => {
  const project: ProjectProps[] = await fetchProject();
  const latest5 = project.slice(0, 5);
  const images = latest5.map(p => p.image);
  return (
    <main className="-mt-5 sm:-my-15">
      {/* hero section */}
      <FadeUpWhenVisible>
        <section className=" min-h-screen w-full flex flex-col justify-center items-center text-center 
      bg-lineart-to-b from-[#00c950]/20 via-[#00aaff]/10 to-transparent space-y-6">
          {/* Title */}
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
            Krisapat<br />
            <span className="bg-linear-to-r from-[#00c950] to-[#00aaff] bg-clip-text text-transparent font-bold">
              Portfolio
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
            Showcasing My Work, Skills, and Project
          </p>
          {/* Buttons */}
          <div className="flex gap-2">
            <Button asChild className="text-white shadow-md transition-all
                                        hover:scale-105 hover:shadow-lg duration-300">
              <Link href={"/project"}>
                ดูโปรเจคทั้งหมด
              </Link>
            </Button>
            <Button asChild className="text-white shadow-md transition-all
                                        hover:scale-105 hover:shadow-lg duration-300">
              <Link href={"/about"}>
                เกี่ยวกับ
              </Link>
            </Button>
          </div>
        </section>
      </FadeUpWhenVisible>
      <section className="-mx-5">
        <ScrollTicker
          items={images.map((img, index) => (
            <div className="
                ml-5 my-5 rounded-lg p-px
               bg-white/70 
        dark:bg-gray-800/60
              ">
              <Image
                key={index}
                src={img}
                alt={`latest-${index}`}
                width={300}
                height={200}
                loading="lazy"
                className="object-cover rounded-lg transition-shadow hover:shadow-xl duration-300"
              />
            </div>
          ))}
          speedFactor={10}
        />
      </section>
      <section className="mt-10 flex flex-col space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          ตัวอย่างโปรเจค
        </h2>
        <LatestProjectsWrapper projects={latest5} />
        <Button asChild className="text-white shadow-md transition-all
                                        hover:scale-105 hover:shadow-lg duration-300
                                        mx-auto">
          <Link href={"/project"}>
            ดูโปรเจคทั้งหมด
          </Link>
        </Button>
      </section>
      <section className="mt-10 flex flex-col space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          ช่องทางการติดต่อ
        </h2>
        <ContactSection />
      </section>
      <section className="mt-10">
        <Reorder images={headImages} />
      </section>
    </main>
  )
}
export default Page