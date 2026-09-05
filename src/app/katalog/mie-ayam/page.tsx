import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { waLink } from "@/data/navbar";

export const metadata: Metadata = {
  title: "Mie Ayam Spesial",
  description: "Katalog mie ayam Semangkok: Original Rp 15.000 dan Mie Ayam Bakso Rp 20.000.",
};

const items = [
  {
    name: "Mie Ayam Original",
    price: "Rp 15.000",
    desc: "Mie klasik dengan ayam kecap manis dan kuah kaldu gurih. Porsi pas, harga bersahabat.",
    img: "/img/mi-ayam.jpg",
    alt: "Mangkok mie ayam original dengan topping ayam kecap",
  },
  {
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Mie ayam plus bakso sapi kenyal. Favorit anak-anak karena tidak pedas.",
    img: "/img/mi-ayam-bakso.jpg",
    alt: "Mie ayam bakso dengan kuah kaldu",
  },
];

const caraPesan = [
  "Klik tombol pesan pada menu pilihanmu",
  "Chat WhatsApp terbuka dengan pesanan tertulis otomatis",
  "Tambahkan alamat atau pilih makan di tempat, lalu kirim",
];

export default function MieAyamPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Mie Ayam Spesial"
        title="Andalan Sejak 1990"
        desc="Dua menu yang paling sering dipesan. Mie ditarik tiap pagi, ayam kampung, kuah kaldu 8 jam."
        section="Katalog"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <article className="h-full overflow-hidden rounded-[2rem] border border-[#2c231b]/5 bg-white shadow-sm">
                <div className="relative h-56 w-full sm:h-64">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-poppins text-xl font-bold text-[#2c231b]">{item.name}</h2>
                    <span className="shrink-0 rounded-xl border border-[#f5b041]/20 bg-[#f5b041]/10 px-4 py-2 font-poppins text-sm font-bold text-[#e09132]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-[#2c231b]/70">
                    {item.desc}
                  </p>
                  <a
                    href={waLink(`Halo Semangkok, saya ingin memesan ${item.name} (${item.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan ${item.name} via WhatsApp`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2c231b] px-6 py-3 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#f5b041] hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
                  >
                    <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
                    Pesan {item.name}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-6 rounded-[2rem] bg-[#2c231b] p-6 sm:rounded-[3rem] sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="font-poppins text-xl font-extrabold text-[#fdf8f5] sm:text-2xl">
                Cara pesan semudah ini
              </h2>
              <ol className="mt-5 space-y-3">
                {caraPesan.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 font-inter text-sm text-[#fdf8f5]/80">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5b041] font-poppins text-xs font-extrabold text-[#2c231b]"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-[#fdf8f5]/15 bg-white/[0.06] p-6 backdrop-blur-sm">
              <h3 className="font-poppins text-base font-bold text-[#f5b041]">Catatan sambal</h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-[#fdf8f5]/75">
                Semua mie disajikan tidak pedas dengan sambal terpisah. Anak-anak aman, yang suka
                pedas tinggal tuang sendiri.
              </p>
            </div>
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
