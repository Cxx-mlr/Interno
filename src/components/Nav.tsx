import Link from "next/link";

interface LinkT {
  name: string;
  href: string;
}

export default function Nav({ links }: { links: LinkT[] }) {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {links.map((link, index) => {
          return (
            <li key={index}
              className={`hover:text-orange-900/40 text-lg tracking-tight
              ${false && "border-b-2 border-orange-900/40 text-orange-900/40"} w-fit`}
            >
              <Link scroll href={link.href}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}