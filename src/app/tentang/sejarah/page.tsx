import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import RelatedPages from "@/components/RelatedPages";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Sejarah Resep 1990",
  description:
    "Linimasa resep Mie Ayam Semangkok dari gerobak Pasar Pagi 1990 sampai dapur Karimata hari ini.",
};

const timeline = [
  {
    year: "1990",
    title: "Gerobak Pasar Pagi",
    desc: "Jualan pertama dengan gerobak. Mie ditarik tangan, kaldu direbus di dapur rumah.",
  },
  {
    year: "2000-an",
    title: "Antrean Makin Panjang",
    desc: "Tamu datang dari luar pasar. Porsi ditambah, resep tetap sama.",
  },
  {
    year: "2010-an",
    title: "Menetap di Karimata",
    desc: "Pindah ke Jl. Karimata No.40, Mulyoharjo. Meja lebih banyak, parkir lebih lega.",
  },
  {
    year: "2021",
    title: "Langganan Keluarga",
    desc: "Banyak tamu yang langganan sejak anaknya kecil sampai sekarang bawa anak sendiri.",
  },
  {
    year: "Hari ini",
    title: "15rb Mangkok per Bulan",
    desc: "Makan di tempat, pesan antar, reservasi arisan. Satu resep, tiga puluhan tahun.",
  },
];

const tetap = [
  "Mie selalu ditarik segar tiap pagi",
  "Kaldu selalu direbus 8 jam dari tulang ayam kampung",
  "Sambal selalu dipisah supaya anak bisa ikut makan",
];

export default function SejarahPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Sejarah Resep 1990"
        title="Satu Resep, Tiga Puluh Tahun"
        desc="Resep ini tidak pernah ditulis ulang. Yang berubah hanya dapurnya yang makin besar dan mejanya yang makin banyak."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <figure className="relative mb-10 h-60 w-full overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:rounded-[3rem]">
            <Image
              src="/img/mi-ayam-bakso.jpg"
              alt="Mie ayam bakso, menu yang menemani perjalanan Semangkok"
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              className="object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#2c231b]/80 px-4 py-2 text-xs font-medium text-[#fdf8f5] backdrop-blur-sm">
              Resep yang sama sejak gerobak 1990
            </figcaption>
          </figure>
        </Reveal>
        <ol className="relative space-y-6 border-l-2 border-[#f5b041]/30 pl-6 sm:pl-8">
          {timeline.map((t, i) => (
            <li key={t.year} className="relative">
              <span
                className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[#f5b041] bg-[#fdf8f5] sm:-left-[41px]"
                aria-hidden="true"
              ></span>
              <Reveal delay={Math.min(i * 80, 240)}>
                <div className="rounded-2xl border border-[#2c231b]/5 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <div className="font-poppins text-sm font-extrabold uppercase tracking-wider text-[#e09132]">
                    {t.year}
                  </div>
                  <h2 className="mt-1 font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
                    {t.title}
                  </h2>
                  <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{t.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-[#f5b041]/30 bg-[#f5b041]/10 p-6 sm:rounded-3xl sm:p-8">
            <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
              Yang tidak pernah berubah
            </h2>
            <ul className="mt-3 space-y-2">
              {tetap.map((t) => (
                <li key={t} className="flex items-start gap-3 font-inter text-sm text-[#2c231b]/75">
                  <i className="fas fa-check mt-1 text-[#e09132]" aria-hidden="true"></i>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
      <RelatedPages />
      <PageCta
        title="Jadi bagian sejarah berikutnya"
        desc="Mampir ke Karimata No.40 dan tulis cerita versimu sendiri, satu mangkok setiap kali."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
