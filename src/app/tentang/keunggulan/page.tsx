import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
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
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 text-left shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-3xl"
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
      </section>
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
