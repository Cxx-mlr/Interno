import Hero from "@/components/sections/Hero";
import ProjectWorkflow from "@/components/sections/ProjectWorkflow";
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
      <ProjectWorkflow />
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
