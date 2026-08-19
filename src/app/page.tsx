import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
