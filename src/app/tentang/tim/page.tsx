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
  title: "Tim Kami",
  description:
    "Kenalan dengan tim dapur dan layanan Mie Ayam Semangkok di Karimata No.40 Pemalang.",
};

const roles = [
  {
    icon: "fas fa-hat-chef",
    title: "Tim Dapur",
    desc: "Menarik mie, merebus kaldu, dan meracik setiap mangkok dadakan sejak subuh.",
  },
  {
    icon: "fas fa-bell-concierge",
    title: "Tim Layanan",
    desc: "Menyambut tamu, mengatur meja, dan memastikan pesanan sampai dengan cepat.",
  },
  {
    icon: "fas fa-motorcycle",
    title: "Tim Antar",
    desc: "Mengantar pesanan dengan packing rapi supaya sampai masih hangat.",
  },
];

const caraRequest = [
  "Sampaikan saat pesan, misalnya setengah porsi atau sambal dipisah",
  "Untuk anak kecil, minta mie tanpa lada dan kuah tidak terlalu panas",
  "Untuk acara, sebutkan jumlah orang supaya meja diatur duluan",
];

export default function TimPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Tim Kami"
        title="Wajah di Balik Mangkok"
        desc="Ownernya ramah dan bisa diajak request. Timnya kompak dari subuh sampai tutup jam 22.00."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-[#2c231b]/5 bg-white p-6 text-center shadow-sm sm:rounded-3xl">
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5b041]/15 text-2xl text-[#f5b041]"
                  aria-hidden="true"
                >
                  <i className={r.icon} aria-hidden="true"></i>
                </div>
                <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{r.title}</h2>
                <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <div className="relative h-60 w-full overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:rounded-[3rem]">
              <Image
                src="/img/mi-ayam.jpg"
                alt="Mangkok mie ayam racikan tim dapur Semangkok"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
                Cara request ke tim
              </h2>
              <ol className="mt-4 space-y-3">
                {caraRequest.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 font-inter text-sm text-[#2c231b]/75">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5b041]/15 font-poppins text-xs font-extrabold text-[#e09132]"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
      <RelatedPages />
      <PageCta
        title="Sapa kami langsung"
        desc="Datang ke Jl. Karimata No.40, Mulyoharjo, Pemalang. Atau sapa dulu via WhatsApp."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
