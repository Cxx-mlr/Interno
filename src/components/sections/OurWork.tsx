
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const works = [
  {
    image: "/assets/work/01.png",
    title: "Modern Kitchen",
    subtitle: "Decor/Architecture",
    href: ""
  },
  {
    image: "/assets/work/02.png",
    title: "Elegant Corridor",
    subtitle: "Decor/Architecture",
    href: ""
  },
  {
    image: "/assets/work/03.png",
    title: "Minimalist Workspace",
    subtitle: "Decor/Architecture",
    href: ""
  },
  {
    image: "/assets/work/04.png",
    title: "Cozy Living Room",
    subtitle: "Decor/Architecture",
    href: ""
  },
];

export default function OurWork({
  id
}: {
  id?: string
}) {
  return (
    <div className="relative">
      <span id={id} className="absolute block invisible -top-20"></span>
      <section aria-labelledby="our-work" className="container mx-auto
        mt-[100px] xl:mt-[160px]
        xl:p-0"
      >
        <div className="flex flex-col items-center gap-4 max-w-[810px] mx-auto text-center">
          <h2 id="our-work" className="font-DM_Serif_Display text-5xl text-black/80">Follow Our Projects</h2>
          <p>Discover our latest projects and see how we bring innovative design concepts to life.</p>
        </div>

        <ul className="mt-[60px] grid grid-cols-1 xl:grid-cols-2 gap-y-8 place-content-between">
          {works.map((work, index) => {
            return (
              <li key={index}
                className="w-full max-w-[548px] mx-auto"
              >
                <img src={work.image} alt="" />
                <div className="flex items-center justify-between py-4">
                  <div className="text-xl">
                    <h3 className="font-DM_Serif_Display">{work.title}</h3>
                    <p>{work.subtitle}</p>
                  </div>
                  <Link href={work.href}
                    scroll={false}
                    className="w-16 h-16
                    bg-orange-100 hover:bg-orange-200/60 rounded-full
                    flex items-center justify-center
                    text-2xl"
                  >
                    <RiArrowRightSLine />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}