
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const news = [
  {
    title: "Innovative Solutions for Modern Building Construction",
    date: "22 June,2024",
    datetime: "2024-06-22",
    image: "/assets/news/01.png",
    href: "",
  },
  {
    title: "Cutting-Edge Interior Design Trends for a Budget-Friendly Makeover",
    date: "24 June,2024",
    datetime: "2024-06-24",
    image: "/assets/news/02.png",
    href: "",
  },
  {
    title: "Best For Any Office & Business Interior Solution",
    date: "28 June,2024",
    datetime: "2024-06-28",
    image: "/assets/news/01.png",
    href: "",
  },
];

export default function News({
  id
}: {
  id?: string
}) {
  return (
    <div className="relative">
      <span id={id} className="absolute block invisible top-[-74px]"></span>
      <section aria-labelledby="news" className="container mx-auto
        mt-[80px] xl:mt-[150px]
        flex flex-col items-center gap-12"
      >
        <div className="max-w-[820px] text-center">
          <h2 id="news" className="font-DM_Serif_Display text-5xl text-black/80 mb-6">Articles & News</h2>
          <p>Stay updated with the latest trends in interior design and home improvement.</p>
        </div>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {news.map((new_, index) => {
            return (
              <li key={index}
                className="border border-black/20 rounded-[45px] w-full max-w-[372px]
                cursor-pointer mx-auto group hover:bg-orange-700/10"
              >
                <div className="p-4 flex flex-col gap-4">
                  <div>
                    <img src={new_.image} alt="" />
                    <h2 className="font-DM_Serif_Display text-2xl">{new_.title}</h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <time className="text-[14px] text-black/80" dateTime={new_.datetime}>{new_.date}</time>
                    <Link href={new_.href}
                      scroll={false}
                      className="w-12 h-12
                      bg-orange-700/10 hover:bg-orange-700/30 rounded-full
                      flex items-center justify-center
                      text-2xl"
                    >
                      <RiArrowRightSLine />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}