import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { waLink } from "@/data/navbar";

export const metadata: Metadata = {
  title: "Minuman Segar",
  description: "Teman makan mie ayam: es teh, es jeruk, dan air mineral dengan harga merakyat.",
};

const drinks = [
  { name: "Es Teh Manis", price: "Rp 4.000", desc: "Teh diseduh pekat, disajikan dingin. Teman wajib mie ayam." },
  { name: "Teh Hangat", price: "Rp 3.000", desc: "Untuk yang tidak suka dingin. Manisnya bisa request." },
  { name: "Es Jeruk", price: "Rp 5.000", desc: "Jeruk peras asli, segar penawar pedas sambal." },
  { name: "Jeruk Hangat", price: "Rp 4.000", desc: "Hangat dan segar, cocok untuk tenggorokan." },
  { name: "Air Mineral", price: "Rp 3.000", desc: "Air mineral dingin kemasan botol." },
];

export default function MinumanPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Minuman Segar"
        title="Penawar Pedas Terbaik"
        desc="Mie ayam tanpa es teh itu seperti sayur tanpa garam. Semua dibuat dadakan saat dipesan."
        section="Katalog"
      />
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <ul className="divide-y divide-[#2c231b]/8 overflow-hidden rounded-2xl border border-[#2c231b]/5 bg-white shadow-sm sm:rounded-3xl">
          {drinks.map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between gap-4 p-5 transition-colors duration-200 hover:bg-[#f5b041]/5 sm:p-6"
            >
              <div>
                <h2 className="font-poppins text-base font-bold text-[#2c231b] sm:text-lg">
                  {d.name}
                </h2>
                <p className="mt-0.5 font-inter text-sm text-[#2c231b]/65">{d.desc}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-xl border border-[#f5b041]/20 bg-[#f5b041]/10 px-3 py-1.5 font-poppins text-sm font-bold text-[#e09132]">
                  {d.price}
                </span>
                <a
                  href={waLink(`Halo Semangkok, saya ingin memesan ${d.name} (${d.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${d.name} via WhatsApp`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2c231b] transition-colors duration-200 hover:text-[#e09132]"
                >
                  <i className="fab fa-whatsapp text-sm" aria-hidden="true"></i>
                  Pesan
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-inter text-sm text-[#2c231b]/55">
          Minuman paling pas dipesan bareng mie ayam bakso. Satu paket kenyang di bawah Rp 25.000.
        </p>
      </section>
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
