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
  title: "Bakso & Topping",
  description:
    "Bakso sapi kenyal, topping ayam kecap ekstra, dan Hotplate Seafood Rp 35.000 di Semangkok.",
};

const items = [
  {
    name: "Mie Ayam Bakso",
    price: "Rp 20.000",
    desc: "Kombinasi mie ayam dan bakso sapi kenyal dalam satu mangkok kuah gurih.",
    img: "/img/mi-ayam-bakso.jpg",
    alt: "Mie ayam bakso sapi dengan kuah kaldu",
  },
  {
    name: "Hotplate Seafood",
    price: "Rp 35.000",
    desc: "Bakmi hotplate dengan udang, cumi, dan kerang segar. Disajikan masih mendesis.",
    img: "/img/seafood-hot-plate.jpg",
    alt: "Bakmi hotplate seafood udang cumi kerang",
  },
  {
    name: "Topping Ayam Ekstra",
    price: "Rp 8.000",
    desc: "Tambahan ayam kecap untuk yang merasa topping bawaannya kurang banyak.",
    img: "/img/mi-ayam.jpg",
    alt: "Topping ayam kecap ekstra di atas mie",
  },
];

export default function BaksoPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Bakso & Topping"
        title="Pelengkap Wajib"
        desc="Baksonya kenyal, toppingnya melimpah. Bisa dipesan terpisah atau digabung dengan mie favorit."
        section="Katalog"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={Math.min(i * 100, 200)}>
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#2c231b]/5 bg-white shadow-sm">
                <div className="relative h-48 w-full sm:h-56">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-poppins text-lg font-bold text-[#2c231b]">{item.name}</h2>
                    <span className="shrink-0 rounded-xl border border-[#f5b041]/20 bg-[#f5b041]/10 px-3 py-1.5 font-poppins text-sm font-bold text-[#e09132]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">
                    {item.desc}
                  </p>
                  <a
                    href={waLink(`Halo Semangkok, saya ingin memesan ${item.name} (${item.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan ${item.name} via WhatsApp`}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#2c231b] px-6 py-3 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#f5b041] hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
                  >
                    <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
                    Pesan
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-[#f5b041]/30 bg-[#f5b041]/10 p-6 sm:flex-row sm:items-center sm:rounded-[3rem] sm:p-8">
            <div>
              <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
                Paket paling hemat
              </h2>
              <p className="mt-1 font-inter text-sm text-[#2c231b]/70">
                Mie Ayam Bakso Rp 20.000 plus Es Teh Rp 4.000. Kenyang total Rp 24.000.
              </p>
            </div>
            <a
              href={waLink("Halo Semangkok, saya ingin memesan paket Mie Ayam Bakso plus Es Teh.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2c231b] px-6 py-3 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#f5b041] hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
            >
              <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
              Pesan Paket
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
