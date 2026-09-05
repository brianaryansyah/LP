import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { waLink } from "@/data/navbar";

export const metadata: Metadata = {
  title: "Kemitraan Supplier",
  description:
    "Jadi pemasok ayam kampung, sayur, dan bahan segar untuk dapur Mie Ayam Semangkok.",
};

const kebutuhan = [
  {
    icon: "fas fa-drumstick-bite",
    title: "Ayam Kampung",
    desc: "Segar tiap pagi, ukuran stabil, siap olah untuk topping dan kaldu.",
  },
  {
    icon: "fas fa-carrot",
    title: "Sayur & Pelengkap",
    desc: "Sawi, daun bawang, dan pelengkap segar dengan pasokan rutin harian.",
  },
  {
    icon: "fas fa-wheat-awn",
    title: "Tepung & Bumbu",
    desc: "Tepung terigu protein sedang dan bumbu dapur untuk adonan dan kuah.",
  },
];

export default function SupplierPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Kemitraan Supplier"
        title="Pasok Dapur Kami"
        desc="Dapur kami masak tiap hari dan butuh pasokan rutin. Kalau barangmu berkualitas dan stabil, mari kerjasama."
        section="Kerjasama"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {kebutuhan.map((k) => (
            <div
              key={k.title}
              className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b041]/15 text-xl text-[#f5b041]"
                aria-hidden="true"
              >
                <i className={k.icon} aria-hidden="true"></i>
              </div>
              <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{k.title}</h2>
              <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{k.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[#f5b041]/30 bg-[#f5b041]/10 p-6 sm:rounded-3xl sm:p-8">
          <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
            Syaratnya sederhana
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 font-inter text-sm leading-relaxed text-[#2c231b]/75">
            <li>Barang segar dan konsisten setiap pengiriman</li>
            <li>Sanggup pasok rutin tiap pagi sebelum jam 7</li>
            <li>Harga wajar dan transparan, bayar tepat waktu dari kami</li>
          </ul>
          <a
            href={waLink("Halo Semangkok, saya ingin menawarkan pasokan bahan. Saya supply…")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2c231b] px-6 py-3 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#f5b041] hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
          >
            <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
            Tawarkan Pasokan
          </a>
        </div>
      </section>
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
