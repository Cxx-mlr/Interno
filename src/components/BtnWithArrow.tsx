
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button"

export default function BtnWithArrow({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <Button
      variant="default"
      className="w-fit text-white/85 text-[16px] p-6 rounded-xl"
    >
      <div className="flex items-center gap-2">
        <p>{children}</p>
        <FaArrowRight className="text-sm text-orange-200/40 mt-[1.8px]" />
      </div>
    </Button>
  );
}