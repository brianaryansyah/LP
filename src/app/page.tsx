import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Venue from "@/components/Venue";
import Testimonial from "@/components/Testimonial";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Mie Ayam Semangkok",
  description: "Warung mie ayam di Pemalang. Makan di tempat atau pesan antar, tiap hari buka 10.00-22.00 WIB.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Karimata No.40, Mulyoharjo",
    addressLocality: "Pemalang",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  telephone: "+6285640734972",
  openingHours: "Mo-Su 10:00-22:00",
  url: "https://semangkok.id",
  image: "https://semangkok.id/img/mi-ayam-bakso.jpg",
  servesCuisine: "Mie Ayam, Bakso",
  priceRange: "Rp 15000 - Rp 35000",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf8f5] relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <Navbar />
      <Hero />
      <Features />
      <Venue />
      <Testimonial />
      <Menu />
      <Reservation />
      <Location />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
