import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Nattasha Mith",
    location: "Greenville, USA",
    description: "Interno transformed my living room into a masterpiece. Their attention to detail and creative approach were exceptional.",
    image: "/assets/testimonial/01.png"
  },
  {
    name: "Jessica White",
    location: "Oak Ridge, USA",
    description: "I love my new kitchen! The team at Interno listened to my needs and delivered beyond my expectations.",
    image: "/assets/testimonial/02.png"
  },
  {
    name: "Mike Davis",
    location: "Berlin, Germany",
    description: "Working with Interno was a fantastic experience. They turned my office into an inspiring workspace.",
    image: "/assets/testimonial/03.png"
  },
  {
    name: "Olivia Wilson",
    location: "Blue Ridge, France",
    description: "The bedroom redesign was flawless. Interno truly understands how to blend style with comfort.",
    image: "/assets/testimonial/04.png"
  }
];

export default function Testimonials({
  id
}: {
  id?: string
}) {
  return (
    <section id={id} aria-labelledby="testimonials-heading"
      className="container mx-auto
      mt-[110px] xl:mt-[200px]
      bg-orange-100
      pb-20
      rounded-[70px]
      flex flex-col items-center gap-8 scroll-mt-[100px]"
    >
      <h2 id="testimonials-heading" className="mt-20 text-5xl text-black/75 font-DM_Serif_Display">What clients say</h2>
      <Carousel className="w-[calc(100%-80px)] mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex items-center justify-center
                md:basis-1/2 xl:basis-1/3
                select-none"
              >
                <div
                  className="w-full max-w-[450px] h-[310px]
                  rounded-[30px]
                  flex flex-col justify-center p-9 gap-5
                  bg-white
                  text-xl
                  aspect-square"
                >
                  <div className="flex items-center gap-4">
                    <img aria-describedby="name" src={testimonial.image} alt="" />
                    <div>
                      <h3 id="name" className="font-DM_Serif_Display font-medium">{testimonial.name}</h3>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <p className="text-black/80">{testimonial.description}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-white" />
        <CarouselNext className="bg-white" />
      </Carousel>
    </section>
  );
}