import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
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
        <ol className="relative space-y-6 border-l-2 border-[#f5b041]/30 pl-6 sm:pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span
                className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[#f5b041] bg-[#fdf8f5] sm:-left-[41px]"
                aria-hidden="true"
              ></span>
              <div className="rounded-2xl border border-[#2c231b]/5 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <div className="font-poppins text-sm font-extrabold uppercase tracking-wider text-[#e09132]">
                  {t.year}
                </div>
                <h2 className="mt-1 font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
                  {t.title}
                </h2>
                <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70">{t.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <PageCta
        title="Jadi bagian sejarah berikutnya"
        desc="Mampir ke Karimata No.40 dan tulis cerita versimu sendiri, satu mangkok setiap kali."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
