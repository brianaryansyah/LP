import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Sertifikasi & Kualitas",
  description:
    "Bahan 100% halal, dimasak segar tiap hari, dan dinilai 4.9 oleh tamu di Google Maps.",
};

const items = [
  {
    icon: "fas fa-certificate",
    title: "100% Halal",
    desc: "Seluruh bahan baku bersertifikasi resmi. Cara masak di dapur dijaga bersih setiap hari.",
  },
  {
    icon: "fas fa-carrot",
    title: "Bahan Segar Harian",
    desc: "Ayam kampung, sayur, dan adonan mie disiapkan tiap pagi. Tidak ada stok kemarin.",
  },
  {
    icon: "fas fa-fire",
    title: "Dimasak Dadakan",
    desc: "Mie direbus dan diracik saat dipesan, bukan disiapkan massal dari pagi.",
  },
  {
    icon: "fas fa-star",
    title: "Rating 4.9 di Google",
    desc: "Dinilai langsung oleh tamu. Ulasan bisa dibaca terbuka di Google Maps.",
  },
];

export default function KualitasPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Sertifikasi & Kualitas"
        title="Standar Dapur Kami"
        desc="Halal, segar, dan dadakan. Tiga standar ini berlaku untuk setiap mangkok yang keluar dari dapur."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5b041]/15 text-xl text-[#f5b041]"
                aria-hidden="true"
              >
                <i className={item.icon} aria-hidden="true"></i>
              </div>
              <div>
                <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{item.title}</h2>
                <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 font-inter text-sm text-[#2c231b]/55">
          Ada yang ingin ditanyakan soal bahan atau alergi? Chat kami via WhatsApp sebelum memesan,
          nanti disiapkan yang sesuai.
        </p>
      </section>
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
