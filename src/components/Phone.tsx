
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Phone({ phone_number, subtitle }: { phone_number: string, subtitle?: string }) {
  return (
    <Link href="tel:+1123456789">
      <div className="flex items-center gap-2">
        {/* icon */}
        <div className="flex items-center justify-center
          size-10 rounded-full
          bg-yellow-700/20 text-yellow-700/40"
        >
          <FaPhoneAlt className="text-lg" />
        </div>

        {/* phone number and subtitle */}
        <div className="flex flex-col text-[16px]">
          <address className="font-semibold">{phone_number}</address>
          <p className="text-black/80">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}