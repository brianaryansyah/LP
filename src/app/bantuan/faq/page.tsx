import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Jawaban atas pertanyaan umum: jam buka, lokasi, pesan antar, reservasi, dan harga Mie Ayam Semangkok.",
};

const faqs = [
  {
    q: "Jam berapa warung buka?",
    a: "Tiap hari pukul 10.00 sampai 22.00 WIB, termasuk akhir pekan. Kalau ada perubahan jam, info dipasang di warung.",
  },
  {
    q: "Alamat lengkapnya di mana?",
    a: "Jl. Karimata No.40, Mulyoharjo, Pemalang. Dekat jalan besar jadi gampang dicari, patokannya area Karimata.",
  },
  {
    q: "Bisa pesan antar?",
    a: "Bisa. Chat WhatsApp 0856-4073-4972, sebutkan pesanan dan alamat. Packing dirapatkan supaya sampai masih hangat.",
  },
  {
    q: "Perlu reservasi dulu?",
    a: "Untuk 1 sampai 6 orang bisa langsung datang. Untuk grup di atas 10 orang atau acara khusus, reservasi minimal 1 hari sebelumnya via halaman Reservasi.",
  },
  {
    q: "Berapa harga menunya?",
    a: "Mie Ayam Original Rp 15.000, Mie Ayam Bakso Rp 20.000, Hotplate Seafood Rp 35.000. Minuman mulai Rp 3.000.",
  },
  {
    q: "Apakah ada menu untuk anak?",
    a: "Ada. Mie ayamnya tidak pedas karena sambal selalu dipisah. Bisa request setengah porsi untuk anak, tinggal bilang ke tim.",
  },
];

export default function FaqPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="FAQ"
        title="Sering Ditanyakan"
        desc="Tidak ketemu jawabanmu? Chat WhatsApp, dibalas cepat jam operasional."
        section="Bantuan"
      />
      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 60, 180)}>
              <details className="group rounded-2xl border border-[#2c231b]/5 bg-white shadow-sm transition-[box-shadow] duration-300 open:shadow-md sm:rounded-3xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-poppins text-base font-bold text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f5b041] sm:p-6 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <i
                    className="fas fa-chevron-down text-sm text-[#f5b041] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  ></i>
                </summary>
                <p className="px-5 pb-5 font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:px-6 sm:pb-6 sm:text-base">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#2c231b] p-6 sm:flex-row sm:items-center sm:rounded-3xl sm:p-8">
            <p className="font-inter text-sm leading-relaxed text-[#fdf8f5]/80 sm:text-base">
              Masih bingung? Tulis pertanyaanmu, kirim via WhatsApp, dibalas jam operasional.
            </p>
            <a
              href="https://wa.me/6285640734972?text=Halo%20Semangkok%2C%20saya%20ingin%20bertanya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
              Tanya Sekarang
            </a>
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
