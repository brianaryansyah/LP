import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf8f5] relative">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Menu />
      <Reservation />
      <Location />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
