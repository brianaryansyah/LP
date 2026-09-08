import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal Semangkok lebih dekat — kisah gerobak Pasar Pagi, keunggulan harian, resep yang dijaga, kualitas halal, dan tim di balik mangkok.",
};

const bento = [
  {
    href: "/tentang/kisah",
    label: "Kisah",
    title: "Dari Gerobak Pasar Pagi sampai Karimata",
    desc: "Perjalanan pelan dari gerobak ke warung dengan resep yang sama.",
    img: "/img/mi-ayam-kepala.jpg",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[320px] lg:h-full min-h-[280px]",
  },
  {
    href: "/tentang/keunggulan",
    label: "Keunggulan",
    title: "Yang kami jaga tiap hari",
    desc: "Kaldu 8 jam, mie ditarik tangan, ayam kampung.",
    img: "/img/mi-ayam.jpg",
    span: "",
    height: "h-56",
  },
  {
    href: "/tentang/sejarah",
    label: "Sejarah",
    title: "Satu Resep, Puluhan Tahun",
    desc: "Linimasa resep dari awal mula sampai hari ini.",
    img: "/img/mi-ayam-bakso.jpg",
    span: "",
    height: "h-56",
  },
  {
    href: "/tentang/kualitas",
    label: "Kualitas",
    title: "100% Halal & Higienis",
    desc: "Bahan bersertifikat, dapur dibersihkan tiap tutup.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    span: "",
    height: "h-56",
  },
  {
    href: "/tentang/tim",
    label: "Tim",
    title: "Orang di balik mangkok",
    desc: "Sapa tim dapur dan kasir yang melayani tiap hari.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    span: "",
    height: "h-56",
  },
];

export default function TentangHub() {
  return (
    <main className="min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <section className="relative overflow-hidden bg-[#fdf8f5] pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="pointer-events-none absolute -right-20 -top-20 aspect-square w-[360px] rounded-full bg-[#f5b041]/12 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#2c231b]/5 blur-[60px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <span className="inline-block rounded-full bg-[#f5b041]/20 border border-[#f5b041]/30 px-4 py-1.5 text-xs font-bold tracking-wider text-[#2c231b]">Tentang Kami</span>
            <h1 className="mt-4 max-w-3xl font-poppins text-4xl font-extrabold leading-[0.95] tracking-tight text-[#2c231b] sm:text-5xl">Mengenal Semangkok lebih dekat</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#2c231b]/65">Lima cerita yang membentuk satu mangkok: kisah gerobak, keunggulan harian, sejarah resep, kualitas, dan tim. Pilih yang ingin kamu baca dulu.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 auto-rows-[220px]">
          {bento.map((b, i) => (
            <Reveal key={b.href} delay={i * 70}>
              <Link href={b.href} className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#2c231b]/10 bg-white shadow-[0_8px_24px_rgba(44,35,27,0.06)] hover:shadow-[0_16px_40px_rgba(44,35,27,0.12)] hover:-translate-y-1 transition-[transform,box-shadow] duration-500 ${b.span}`}>
                <div className={`relative w-full overflow-hidden ${b.height} shrink-0`}>
                  <Image src={b.img} alt={b.title} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#2c231b] border border-white/20">{b.label}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-poppins text-base font-bold leading-tight text-[#2c231b] group-hover:text-[#e09132] transition-colors duration-300">{b.title}</h2>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-[#2c231b]/60">{b.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#2c231b]">Buka <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#2c231b] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-poppins text-lg font-bold text-white">Mampir dan rasakan sendiri</h3>
            <p className="text-sm text-white/70 mt-1">Kami buka tiap hari 10.00–22.00 di Jl. Karimata No.40</p>
          </div>
          <a href="https://wa.me/6285640734972" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] hover:bg-white transition-colors shrink-0">Chat WhatsApp <i className="fab fa-whatsapp" aria-hidden="true"></i></a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
