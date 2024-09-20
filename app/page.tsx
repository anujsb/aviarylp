
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FloatingNavDemo />
      <Hero/>
      {/* <Video /> */}
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
