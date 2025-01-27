import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import '../sections/style.css'
// import grainImage from '@/assets/images/grain.jpg'
import { ProjectsSection } from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <div>
     <Header/>
    <HeroSection />
    <ProjectsSection />
    <div className="magicpattern inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
      <TapeSection/>
      <TestimonialsSection/>
      
    </div>
      <AboutSection />


      <ContactSection />
      <Footer/>

    </div>
  );
}
