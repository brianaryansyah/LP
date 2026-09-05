import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Berita & Event",
  description: "Kabar terbaru Mie Ayam Semangkok: jam operasional, pesan antar, dan reservasi acara.",
};

const kabar = [
  {
    tag: "Operasional",
    title: "Buka Tiap Hari 10.00 sampai 22.00",
    desc: "Termasuk akhir pekan dan tanggal merah. Kalau ada perubahan jam, pengumuman dipasang di warung dan dibalas cepat via WhatsApp.",
  },
  {
    tag: "Pesan Antar",
    title: "Masih Hangat Sampai Rumah",
    desc: "Packing dirapatkan supaya kuah tidak tumpah dan mie tidak lembek. Bakso hotplate jadi favorit untuk dipesan jauh.",
  },
  {
    tag: "Acara",
    title: "Arisan dan Ulang Tahun",
    desc: "Meja grup tersedia untuk arisan, kumpul teman, dan ulang tahun anak. Untuk grup di atas 10 orang, reservasi minimal 1 hari sebelumnya.",
  },
];

export default function BeritaPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Berita & Event"
        title="Kabar dari Warung"
        desc="Pengumuman penting dan kabar terbaru. Untuk info paling cepat, chat WhatsApp kami langsung."
        section="Artikel"
      />
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          {kabar.map((k) => (
            <article
              key={k.title}
              className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
            >
              <span className="inline-block rounded-full bg-[#f5b041]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e09132]">
                {k.tag}
              </span>
              <h2 className="mt-3 font-poppins text-xl font-bold text-[#2c231b] sm:text-2xl">
                {k.title}
              </h2>
              <p className="mt-2 font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base">
                {k.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
      <PageCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
