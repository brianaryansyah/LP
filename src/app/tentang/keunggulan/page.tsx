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
  title: "Keunggulan Kami",
  description:
    "Kaldu 8 jam, mie ditarik tangan tiap pagi, ayam kampung, dan harga merakyat. Ini alasan tamu kembali ke Semangkok.",
};

const points = [
  {
    icon: "fas fa-clock",
    title: "Kaldu 8 Jam",
    desc: "Tulang ayam kampung direbus perlahan sejak subuh. Gurihnya alami, tanpa penyedap berlebih.",
  },
  {
    icon: "fas fa-utensils",
    title: "Mie Ditarik Tangan",
    desc: "Adonan segar dibuat tiap pagi. Teksturnya kenyal saat digigit, tidak lembek.",
  },
  {
    icon: "fas fa-drumstick-bite",
    title: "Ayam Kampung",
    desc: "Topping ayam kampung dimasak kecap perlahan. Porsinya tidak pelit.",
  },
  {
    icon: "fas fa-wallet",
    title: "Harga Merakyat",
    desc: "Mulai Rp 15.000 per mangkok. Porsi pas, rasa restoran kaki lima premium.",
  },
  {
    icon: "fas fa-certificate",
    title: "100% Halal",
    desc: "Semua bahan bersertifikasi resmi. Aman untuk keluarga dan anak-anak.",
  },
  {
    icon: "fas fa-motorcycle",
    title: "Pesan Antar Hangat",
    desc: "Packing rapi, sampai rumah masih hangat. Bisa pesan untuk arisan juga.",
  },
];

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
        title="Kenapa Tamu Selalu Kembali"
        desc="Tidak ada gimmick. Hanya tiga hal yang kami jaga tiap hari: mie segar, kaldu lama, dan ayam kampung."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-[#2c231b]/5 bg-white p-6 text-left shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-3xl">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b041]/15 text-xl text-[#f5b041]"
                  aria-hidden="true"
                >
                  <i className={p.icon} aria-hidden="true"></i>
                </div>
                <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{p.title}</h2>
                <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-6 overflow-hidden rounded-[2rem] bg-[#2c231b] p-6 sm:rounded-[3rem] sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl">
              <Image
                src="/img/mi-ayam.jpg"
                alt="Mangkok mie ayam dengan topping ayam kecap"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-poppins text-xl font-extrabold text-[#fdf8f5] sm:text-2xl">
                Ritme dapur sehari
              </h2>
              <ul className="mt-5 space-y-4">
                {ritme.map((r) => (
                  <li key={r.time} className="flex items-center gap-4">
                    <span className="w-14 shrink-0 rounded-lg bg-[#f5b041]/15 px-2 py-1 text-center font-poppins text-sm font-extrabold text-[#f5b041]">
                      {r.time}
                    </span>
                    <span className="font-inter text-sm text-[#fdf8f5]/80">{r.desc}</span>
                  </li>
                ))}
              </ul>
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
