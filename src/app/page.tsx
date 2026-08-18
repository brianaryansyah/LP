import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Location />
      <Reservation />
      <Footer />
    </main>
  );
}
