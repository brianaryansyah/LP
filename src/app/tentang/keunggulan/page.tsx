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
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Keunggulan Kami",
  description:
    "Kaldu 8 jam, mie ditarik tangan tiap pagi, ayam kampung, dan harga merakyat. Ini alasan tamu kembali ke Semangkok.",
};





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
        <Reveal delay={80}>
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white border border-[#2c231b]/5 p-6 sm:p-7 shadow-sm text-center">
            <div>
              <div className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#2c231b]"><CountUp value={8} suffix=" Jam" /></div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2c231b]/50">Kaldu direbus</div>
            </div>
            <div className="border-l border-[#2c231b]/10">
              <div className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#2c231b]"><CountUp value={15} suffix="rb+" /></div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2c231b]/50">Mangkok / bulan</div>
            </div>
            <div className="border-l border-[#2c231b]/10">
              <div className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#2c231b]"><CountUp value={4} suffix=".9/5" /></div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2c231b]/50">Rating Maps</div>
            </div>
          </div>
        </Reveal>
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
