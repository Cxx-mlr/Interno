import Hero from "@/components/sections/Hero";
import Steps from "@/components/sections/Steps";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Brands from "@/components/sections/Brands";
import OurWork from "@/components/sections/OurWork";
import Stats from "@/components/sections/Stats"
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero id="home" />
      <Steps />
      <About id="about" />
      <Testimonials id="testimonials" />
      <Brands />
      <OurWork id="our-work" />
      <Stats />
      <News id="news" />
      <Contact id="contact" />
    </main>
  );
}
