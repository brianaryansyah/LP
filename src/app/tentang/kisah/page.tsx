import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Kisah Semangkok",
  description:
    "Perjalanan Mie Ayam Semangkok dari gerobak Pasar Pagi tahun 1990 sampai warung di Jl. Karimata No.40 Pemalang.",
};

const stats = [
  { value: "30+", label: "Tahun berjualan" },
  { value: "15rb+", label: "Mangkok per bulan" },
  { value: "4.9/5", label: "Rating Google Maps" },
];

export default function KisahPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Kisah Semangkok"
        title="Dari Gerobak Pasar Pagi sampai Karimata"
        desc="Sejak 1990 kami menarik mie setiap pagi dan merebus kaldu delapan jam. Resepnya tidak berubah, yang berubah hanya tempatnya yang makin nyaman."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <figure className="relative mb-10 h-60 w-full overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:rounded-[3rem]">
            <Image
              src="/img/mi-ayam-kepala.jpg"
              alt="Ayam kecap dimasak di wajan besar dapur Semangkok"
              fill
              sizes="(max-width: 768px) 90vw, 70vw"
              className="object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#2c231b]/80 px-4 py-2 text-xs font-medium text-[#fdf8f5] backdrop-blur-sm">
              Wajan ayam kecap, dimasak perlahan tiap pagi
            </figcaption>
          </figure>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-5 font-inter text-sm leading-relaxed text-[#2c231b]/75 sm:text-base lg:col-span-3">
            <Reveal>
              <p>
                Semangkok berawal dari sebuah gerobak di Pasar Pagi Pemalang pada tahun 1990. Tiap
                subuh adonan mie disiapkan, ayam kampung dimasak kecap perlahan, dan kaldu direbus
                sampai gurih. Tamu pertama kami adalah pedagang pasar dan anak sekolah yang mampir
                sebelum beraktivitas.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Dari mulut ke mulut, antrean makin panjang. Kami pindah ke tempat yang lebih layak
                sampai akhirnya menetap di Jl. Karimata No.40, Mulyoharjo. Dapurnya lebih besar,
                mejanya lebih banyak, tapi cara masaknya sama persis seperti di gerobak dulu.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p>
                Hari ini Semangkok menyajikan belasan ribu mangkok setiap bulan. Ada yang makan di
                tempat bareng keluarga, ada yang pesan antar sampai rumah, ada juga yang reservasi
                untuk arisan dan ulang tahun. Semuanya kami layani dengan resep yang sama.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <blockquote className="rounded-2xl border-l-4 border-[#f5b041] bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <p className="font-inter text-sm italic leading-relaxed text-[#2c231b]/80 sm:text-base">
                  “Porsi banyak, ayamnya nggak pelit, baksonya kenyal. Langganan dari 2021, rasa
                  konsisten.”
                </p>
                <cite className="mt-2 block text-xs font-bold not-italic text-[#2c231b]/60">
                  Ahmad Fauzi, Google Maps
                </cite>
              </blockquote>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="rounded-2xl border border-[#2c231b]/5 bg-white p-5 text-center shadow-sm sm:rounded-3xl sm:p-6">
                  <div className="font-poppins text-2xl font-extrabold text-[#2c231b] sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#2c231b]/55">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <RelatedPages />
      <PageCta
        title="Mampir dan rasakan sendiri"
        desc="Cerita paling enak dibuktikan dengan semangkok mie hangat. Kami buka tiap hari 10.00 sampai 22.00 WIB."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
