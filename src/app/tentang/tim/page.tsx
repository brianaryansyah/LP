import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
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
          {roles.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 text-center shadow-sm sm:rounded-3xl"
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5b041]/15 text-2xl text-[#f5b041]"
                aria-hidden="true"
              >
                <i className={r.icon} aria-hidden="true"></i>
              </div>
              <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{r.title}</h2>
              <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center font-inter text-sm leading-relaxed text-[#2c231b]/60">
          Punya request khusus, misalnya mie setengah porsi untuk anak atau level sambal tertentu?
          Bilang saja ke tim, selama bisa kami siapkan.
        </p>
      </section>
      <PageCta
        title="Sapa kami langsung"
        desc="Datang ke Jl. Karimata No.40, Mulyoharjo, Pemalang. Atau sapa dulu via WhatsApp."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
