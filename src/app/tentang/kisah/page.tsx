import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Kisah Semangkok",
  description:
    "Perjalanan Mie Ayam Semangkok dari gerobak Pasar Pagi tahun 1990 sampai warung di Jl. Karimata No.40 Pemalang.",
};

const stats = [
  { value: "30+", label: "Tahun berjualan" },
  { value: "15rb+", label: "Mangkok per bulan" },
  { value: "4.9/5", label: "Rating Google Maps" },
];

export default function KisahPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Kisah Semangkok"
        title="Dari Gerobak Pasar Pagi sampai Karimata"
        desc="Sejak 1990 kami menarik mie setiap pagi dan merebus kaldu delapan jam. Resepnya tidak berubah, yang berubah hanya tempatnya yang makin nyaman."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-5 font-inter text-sm leading-relaxed text-[#2c231b]/75 sm:text-base lg:col-span-3">
            <p>
              Semangkok berawal dari sebuah gerobak di Pasar Pagi Pemalang pada tahun 1990. Tiap
              subuh adonan mie disiapkan, ayam kampung dimasak kecap perlahan, dan kaldu direbus
              sampai gurih. Tamu pertama kami adalah pedagang pasar dan anak sekolah yang mampir
              sebelum beraktivitas.
            </p>
            <p>
              Dari mulut ke mulut, antrean makin panjang. Kami pindah ke tempat yang lebih layak
              sampai akhirnya menetap di Jl. Karimata No.40, Mulyoharjo. Dapurnya lebih besar,
              mejanya lebih banyak, tapi cara masaknya sama persis seperti di gerobak dulu.
            </p>
            <p>
              Hari ini Semangkok menyajikan belasan ribu mangkok setiap bulan. Ada yang makan di
              tempat bareng keluarga, ada yang pesan antar sampai rumah, ada juga yang reservasi
              untuk arisan dan ulang tahun. Semuanya kami layani dengan resep yang sama.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[#2c231b]/5 bg-white p-5 text-center shadow-sm sm:rounded-3xl sm:p-6"
              >
                <div className="font-poppins text-2xl font-extrabold text-[#2c231b] sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#2c231b]/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCta
        title="Mampir dan rasakan sendiri"
        desc="Cerita paling enak dibuktikan dengan semangkok mie hangat. Kami buka tiap hari 10.00 sampai 22.00 WIB."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
