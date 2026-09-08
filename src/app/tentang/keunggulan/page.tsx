import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import KeunggulanGrid from "@/components/KeunggulanGrid";
import RitmeTimeline from "@/components/RitmeTimeline";

export const metadata: Metadata = {
  title: "Keunggulan Kami",
  description:
    "Kaldu 8 jam, mie ditarik tangan tiap pagi, ayam kampung, dan harga merakyat. Ini alasan tamu kembali ke Semangkok.",
};



const ritme = [
  { time: "04.00", desc: "Adonan mie disiapkan dan ditarik" },
  { time: "05.00", desc: "Kaldu mulai direbus 8 jam" },
  { time: "10.00", desc: "Warung buka, mie pertama disajikan" },
  { time: "22.00", desc: "Tutup, dapur dibersihkan total" },
];

export default function KeunggulanPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Keunggulan Kami"
        title="Yang kami jaga tiap hari"
        desc="Tiga hal sederhana: mie dibuat pagi, kaldu direbus lama, ayam kampung dimasak biasa."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <KeunggulanGrid />
        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-6 overflow-hidden rounded-[2rem] bg-[#2c231b] p-6 sm:rounded-[3rem] sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-xl group">
              <Image
                src="/img/mi-ayam.jpg"
                alt="Mangkok mie ayam dengan topping ayam kecap"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-poppins text-xl font-extrabold text-[#fdf8f5] sm:text-2xl">
                Ritme dapur sehari
              </h2>
              <p className="mt-2 text-xs text-white/50">Arahkan kursor untuk melihat detail, highlight otomatis sesuai jam sekarang.</p>
              <RitmeTimeline />
            </div>
          </div>
        </Reveal>
      </section>
      <RelatedPages />
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
