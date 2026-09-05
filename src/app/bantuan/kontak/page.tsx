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
  title: "Hubungi Kami",
  description:
    "Alamat, jam buka, telepon, dan WhatsApp Mie Ayam Semangkok di Karimata No.40 Pemalang.",
};

const channels = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Alamat",
    value: "Jl. Karimata No.40, Mulyoharjo, Pemalang",
    href: "https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9",
    action: "Buka di Maps",
    external: true,
  },
  {
    icon: "fas fa-clock",
    title: "Jam Buka",
    value: "Setiap hari, 10.00 sampai 22.00 WIB",
    href: "/bantuan/faq",
    action: "Lihat FAQ",
    external: false,
  },
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    value: "0856-4073-4972",
    href: waLink("Halo Semangkok, saya ingin bertanya."),
    action: "Chat Sekarang",
    external: true,
  },
];

export default function KontakPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Hubungi Kami"
        title="Sapa Kami Kapan Saja"
        desc="Reservasi, pesan antar, catering, atau sekadar tanya menu. Paling cepat via WhatsApp jam operasional."
        section="Bantuan"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b041]/15 text-xl text-[#f5b041]"
                  aria-hidden="true"
                >
                  <i className={c.icon} aria-hidden="true"></i>
                </div>
                <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{c.title}</h2>
                <p className="mt-1 flex-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">
                  {c.value}
                </p>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e09132] transition-colors duration-200 hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
                >
                  {c.action}
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-[#f5b041]/30 bg-[#f5b041]/10 p-6 sm:rounded-3xl sm:p-8">
            <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
              Tips biar tidak antre
            </h2>
            <p className="mt-2 font-inter text-sm leading-relaxed text-[#2c231b]/70">
              Jam makan siang dan malam akhir pekan paling ramai. Datang sebelum jam 12 atau
              reservasi dulu lewat WhatsApp supaya meja sudah siap saat kamu sampai.
            </p>
          </div>
        </Reveal>
      </section>
      <RelatedPages />
      <PageCta
        title="Paling cepat via WhatsApp"
        desc="Tulis kebutuhanmu: jumlah orang, tanggal, dan menu. Nanti kami balas dengan konfirmasi."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
