import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { RiMenu4Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

interface LinkT {
  name: string;
  href: string;
}

export default function MobileNav({ links }: { links: LinkT[] }) {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu4Fill className="size-6 mt-2" />
      </SheetTrigger>
      <SheetContent side="top" className="bg-white">
        <nav>
          <ul className="flex flex-col gap-4 mt-7">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`hover:text-orange-900/40 text-lg tracking-tight
                  ${false && "border-b-2 border-orange-900/40 text-orange-900/40"}`}
                >
                  <Link scroll href={link.href} className="block">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}