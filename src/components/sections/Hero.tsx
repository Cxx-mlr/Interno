
import BtnWithArrow from "@/components/BtnWithArrow";
import Grid from "@/components/Grid";

export default function Hero({
  id
}: {
  id?: string
}) {
  return (
    <>
      <section aria-labelledby="home"
        id={id}
        className="h-[670px] xl:h-[700px]
        xl:rounded-bl-[100px]
        bg-hero bg-no-repeat bg-center bg-fixed
        xl:bg-cover"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center sm:items-start justify-center
          h-full max-w-[500px] gap-8
          text-center sm:text-left">
            <h1 id="home" className="text-6xl font-DM_Serif_Display text-black/70">Let Your Home<br />Be Unique</h1>
            <p className="text-black/75">Transform your living space into a unique reflection of your style with our expert interior design services.</p>
            <BtnWithArrow>Get free estimation</BtnWithArrow>
          </div>
        </div>
      </section>
      <Grid />
    </>
  );
}