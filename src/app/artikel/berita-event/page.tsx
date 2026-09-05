import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
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
        <Reveal>
          <figure className="relative mb-8 h-60 w-full overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:rounded-[3rem]">
            <Image
              src="/img/seafood-hot-plate.jpg"
              alt="Bakmi hotplate seafood favorit untuk acara dan pesan antar"
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              className="object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#2c231b]/80 px-4 py-2 text-xs font-medium text-[#fdf8f5] backdrop-blur-sm">
              Hotplate seafood, favorit pesanan acara
            </figcaption>
          </figure>
        </Reveal>
        <div className="space-y-4 sm:space-y-6">
          {kabar.map((k, i) => (
            <Reveal key={k.title} delay={Math.min(i * 100, 200)}>
              <article className="rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
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
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#2c231b] p-6 sm:flex-row sm:items-center sm:rounded-3xl sm:p-8">
            <p className="font-inter text-sm leading-relaxed text-[#fdf8f5]/80 sm:text-base">
              Mau bikin acara di warung? Amankan tanggal dulu lewat halaman reservasi.
            </p>
            <Link
              href="/#reservasi"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Reservasi Grup
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </Link>
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
