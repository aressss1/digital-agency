import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
    </>
  )
}
