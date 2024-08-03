
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function LinkWithArrow({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Link href=""
      scroll={false}
    >
      <div className="group flex items-center gap-2">
        <p className="group-hover:text-yellow-700/40 tracking-tighter text-xl font-medium text-black/65">{children}</p>
        <FaArrowRight className="text-sm text-yellow-700/40 mt-[1.8px]" />
      </div>
    </Link>
  );
}