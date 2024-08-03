
import BtnWithArrow from "@/components/BtnWithArrow";
import Phone from "@/components/Phone";
import Image from "next/image";

export default function About({
  id
}: {
  id?: string
}) {
  return (
    <div className="relative">
      <span id={id} className="absolute invisible top-[-40px]"></span>
      <section
        className="container mx-auto mt-[110px] xl:mt-[200px] flex flex-col gap-[50px] items-center md:flex-row md:justify-between"
      >
        {/* text */}
        <div className="flex flex-col gap-6 items-center md:items-start order-2 md:order-none   text-center md:text-left  flex-1">
          <h2 className="font-DM_Serif_Display text-5xl text-black/80">We Create The Art Of Stylish Living</h2>
          <p className="mt-2 text-black/65">With a passion for design and an eye for detail, we craft spaces that are not only beautiful but also functional. Our goal is to enhance your lifestyle through exceptional design solutions.</p>
          <Phone phone_number="+1 (123) 456-789" subtitle="Call Us Anytime" />
          <BtnWithArrow>Get free estimation</BtnWithArrow>
        </div>

        {/* image */}
        <div className="order-1 md:order-none max-w-[453px] xl:max-w-none">
          <img src="/assets/about/img.png" alt="about" />
        </div>
      </section>
    </div>
  );
}