
import BtnWithArrow from "@/components/BtnWithArrow";

export default function Contact({
  id
}: {
  id?: string
}) {
  return (
    <div className="relative">
      <span id={id} className="absolute block invisible -top-16"></span>
      <section className="container mx-auto
        mt-[80px] xl:mt-[140px]
        bg-black/80
        text-white/90
        text-center
        rounded-3xl"
      >
        <div className="p-14 flex flex-col gap-4 items-center">
          <h2 className="font-DM_Serif_Display text-4xl">Do You Want to Join Interno?</h2>
          <p className="text-xl">Reach out to us and let’s discuss how we can make your design dreams a reality.</p>
          <span className="border border-white rounded-xl hover:bg-orange-500 hover:mix-blend-color-dodge">
            <BtnWithArrow>Connect with us</BtnWithArrow>
          </span>
        </div>
      </section>
    </div>
  );
}