import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { waLink } from "@/data/navbar";

export const metadata: Metadata = {
  title: "Peluang Franchise",
  description:
    "Buka cabang Mie Ayam Semangkok di kotamu. Resep 1990, training sampai bisa, pasokan bahan terjaga.",
};

const paket = [
  {
    icon: "fas fa-book-open",
    title: "Resep & SOP Lengkap",
    desc: "Takaran bumbu, cara tarik mie, dan standar rasa yang sama dengan warung pusat.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Training Sampai Bisa",
    desc: "Belajar langsung di dapur Karimata sampai tim kamu lulus standar rasa.",
  },
  {
    icon: "fas fa-truck",
    title: "Pasokan Bahan",
    desc: "Jalur pasok bumbu dan bahan inti supaya rasa cabang sama dengan pusat.",
  },
];

const langkah = [
  "Chat WhatsApp dan ceritakan lokasi rencanamu",
  "Survei lokasi dan diskusi modal bareng tim",
  "Training di dapur Karimata Pemalang",
  "Grand opening didampingi sampai ramai",
];

export default function FranchisePage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Peluang Franchise"
        title="Bawa Semangkok ke Kotamu"
        desc="Resep yang bertahan 30 tahun, sistem yang sudah kebukti. Kamu fokus jualan, kami kawal rasanya."
        section="Kerjasama"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {paket.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b041]/15 text-xl text-[#f5b041]"
                  aria-hidden="true"
                >
                  <i className={p.icon} aria-hidden="true"></i>
                </div>
                <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{p.title}</h2>
                <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-[#f5b041]/30 bg-[#f5b041]/10 p-6 sm:rounded-3xl sm:p-8">
            <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
              Cocok untuk kamu yang
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Punya ruko atau lokasi ramai di kotamu",
                "Siap terjun harian, bukan investor pasif",
                "Mau ikut standar rasa tanpa modifikasi",
                "Suka kuliner dan tahan uji dapur",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3 font-inter text-sm text-[#2c231b]/75">
                  <i className="fas fa-check mt-1 text-[#e09132]" aria-hidden="true"></i>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={150}>
        <div className="mt-10 rounded-2xl bg-[#2c231b] p-6 sm:rounded-3xl sm:p-10">
          <h2 className="font-poppins text-xl font-extrabold text-[#fdf8f5] sm:text-2xl">
            Alurnya sederhana
          </h2>
          <ol className="mt-5 space-y-4">
            {langkah.map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5b041] font-poppins text-sm font-extrabold text-[#2c231b]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="pt-1 font-inter text-sm text-[#fdf8f5]/80 sm:text-base">{s}</span>
              </li>
            ))}
          </ol>
          <a
            href={waLink("Halo Semangkok, saya tertarik peluang franchise. Lokasi saya di…")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
            Konsultasi Gratis
          </a>
        </div>
        </Reveal>
      </section>
      <RelatedPages />
      <PageCta
        title="Mulai dari obrolan"
        desc="Ceritakan lokasimu, nanti kami hitung bareng butuh apa saja. Tanpa komitmen."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
