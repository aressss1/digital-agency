import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonails from "@/components/testimonials";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Testimonails />
    </>
  )
}
