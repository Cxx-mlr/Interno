
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

import { PiHouseFill } from "react-icons/pi";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Our Work",
    href: "#our-work",
  },
  {
    name: "News",
    href: "#news"
  },
  {
    name: "Contact",
    href: "#contact"
  }
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0
      bg-white shadow-md
      py-3 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <ImageWithFallback
            src="/assets/logo.svg"
            alt="Interno"
            width={120}
            height={28.25}
            fallbackElement={
              <div className="flex items-center justify-center gap-1">
                <PiHouseFill className="text-yellow-700/50 text-3xl -mt-[1px]" />
                <h1 className="text-[26px] font-DM_Serif_Display text-black/80">Interno</h1>
              </div>
            }
          />
        </Link>
        
        {/* nav */}
        <div className="hidden md:block">
          <Nav links={links} />
        </div>
          
        {/* mobile nav */}
        <div className="block md:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}