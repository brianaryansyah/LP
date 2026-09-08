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
  title: "Kisah Semangkok",
  description:
    "Perjalanan Mie Ayam Semangkok dari gerobak Pasar Pagi sampai warung di Jl. Karimata No.40 Pemalang.",
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
        desc="Sejak awal kami menarik mie setiap pagi dan merebus kaldu delapan jam. Resepnya tidak berubah, yang berubah hanya tempatnya yang makin nyaman."
        section="Tentang Kami"
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div className="relative mb-10 h-[380px] sm:h-[440px] lg:h-[500px] w-full overflow-hidden rounded-2xl border border-[#2c231b]/10 shadow-[0_20px_50px_rgba(44,35,27,0.12)] group">
            <Image
              src="/img/mi-ayam-kepala.jpg"
              alt="Ayam kecap dimasak di wajan besar dapur Semangkok"
              fill
              sizes="(max-width: 768px) 90vw, 70vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" aria-hidden="true" />
            <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-xs font-bold text-[#2c231b] border border-[#2c231b]/10 shadow-sm">
              Wajan ayam kecap, dimasak perlahan tiap pagi
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/95 backdrop-blur border border-white/20 px-3 py-3 text-center shadow-sm">
                    <div className="font-poppins text-lg sm:text-xl font-extrabold text-[#2c231b] leading-none">{s.value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#2c231b]/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-5 font-inter text-sm leading-relaxed text-[#2c231b]/75 sm:text-base lg:col-span-3 lg:pt-2">
            <Reveal>
              <p>
                Semangkok berawal dari sebuah gerobak di Pasar Pagi Pemalang. Tiap
                subuh adonan mie disiapkan, ayam kampung dimasak kecap perlahan, dan kaldu direbus
                sampai gurih. Tamu pertama kami adalah pedagang pasar dan anak sekolah yang mampir
                sebelum beraktivitas.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Dari mulut ke mulut, antrean makin panjang. Kami pindah ke tempat yang lebih layak
                sampai akhirnya menetap di Jl. Karimata No.40, Mulyoharjo. Dapurnya lebih besar,
                mejanya lebih banyak, tapi cara masaknya sama persis seperti di gerobak dulu.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p>
                Hari ini Semangkok menyajikan belasan ribu mangkok setiap bulan. Ada yang makan di
                tempat bareng keluarga, ada yang pesan antar sampai rumah, ada juga yang reservasi
                untuk arisan dan ulang tahun. Semuanya kami layani dengan resep yang sama.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <figure className="relative overflow-hidden rounded-2xl bg-[#2c231b] p-6 sm:p-7 border border-[#2c231b] shadow-[0_12px_32px_rgba(44,35,27,0.18)]">
                <i className="fas fa-quote-left absolute -top-1 left-4 text-5xl text-white/[0.07]" aria-hidden="true"></i>
                <blockquote className="relative">
                  <p className="font-inter text-[15px] sm:text-base leading-relaxed italic text-[#fdf8f5]/90">
                    “Porsi banyak, ayamnya nggak pelit, baksonya kenyal. Langganan dari 2021, rasa konsisten. Anak suka, porsi pas buat keluarga.”
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5b041] text-[#2c231b] font-poppins text-xs font-extrabold">AF</span>
                  <div>
                    <cite className="block text-xs font-bold not-italic text-white">Ahmad Fauzi</cite>
                    <span className="text-[11px] text-white/60">Google Maps • 5 dari 5</span>
                  </div>
                  <span className="ml-auto hidden sm:flex gap-0.5 text-[#f5b041] text-[11px]" aria-hidden="true">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
            <Reveal delay={150}>
              <div className="relative h-[340px] lg:h-[420px] rounded-2xl overflow-hidden border border-[#2c231b]/10 shadow-[0_16px_40px_rgba(44,35,27,0.1)] group">
                <Image src="/img/mi-ayam.jpg" alt="Mangkok mie ayam Semangkok" fill sizes="(max-width: 1024px) 40vw, 90vw" className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur px-3.5 py-3 border border-[#2c231b]/10 shadow-sm">
                  <p className="text-xs font-bold text-[#2c231b] font-poppins">Mangkok yang sama, sejak gerobak</p>
                  <p className="text-[11px] text-[#2c231b]/60 leading-relaxed mt-1">Porsi dan rasa dijaga, bukan dibesarkan. Satu takaran untuk semua.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-[#2c231b] px-4 py-1.5 text-xs font-bold tracking-wider text-white">Linimasa</span>
              <h2 className="mt-3 font-poppins text-2xl font-extrabold text-[#2c231b] sm:text-3xl">Perjalanan yang pelan</h2>
              <p className="mt-2 text-sm text-[#2c231b]/60 max-w-xl mx-auto">Tidak ada lompatan besar. Hanya pindah tempat, tambah meja, dan tetap masak dengan cara yang sama.</p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2c231b]/10 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
            {[
              { title: "Gerobak Pasar Pagi", desc: "Berjualan dengan gerobak. Mie ditarik tangan tiap subuh, kaldu direbus di dapur rumah. Tamu pertama pedagang pasar dan anak sekolah.", img: "/img/mi-ayam-kepala.jpg", alt: "Wajan ayam kecap di dapur awal" },
              { title: "Pindah ke Karimata", desc: "Dapat tempat di Jl. Karimata No.40. Dapur lebih lega, meja lebih banyak, parkir lebih mudah. Cara masak tetap sama persis.", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", alt: "Ruang makan Karimata" },
              { title: "Warung keluarga", desc: "Sekarang banyak tamu yang datang bareng keluarga, arisan, atau pesan antar. Kami layani dengan resep yang sama, satu mangkok setiap kali.", img: "/img/mi-ayam-bakso.jpg", alt: "Mie ayam bakso disajikan" },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className={`relative flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 lg:mb-12 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="hidden lg:block absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#f5b041] border-2 border-white shadow-sm" aria-hidden="true" />
                  <div className="flex-1 lg:w-1/2 pl-10 lg:pl-0">
                    <div className={`bg-white rounded-2xl border border-[#2c231b]/10 p-5 sm:p-6 shadow-sm ${idx % 2 === 1 ? "lg:ml-8" : "lg:mr-8 lg:text-right"}`}>
                      <h3 className="font-poppins text-base font-bold text-[#2c231b]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#2c231b]/65">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex-1 lg:w-1/2 pl-10 lg:pl-0">
                    <div className={`relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#2c231b]/10 shadow-sm group ${idx % 2 === 1 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <Image src={item.img} alt={item.alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" loading="lazy" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <RelatedPages />
      <PageCta
        title="Mampir dan rasakan sendiri"
        desc="Cerita paling enak dibuktikan dengan semangkok mie hangat. Kami buka tiap hari 10.00 sampai 22.00 WIB."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
