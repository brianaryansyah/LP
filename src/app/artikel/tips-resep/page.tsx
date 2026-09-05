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
  title: "Tips & Resep",
  description:
    "Tips ala dapur Semangkok: kaldu gurih, mie kenyal, dan sambal yang pas untuk mie ayam rumahan.",
};

const tips = [
  {
    no: "01",
    title: "Rebus Kaldu dengan Api Kecil",
    desc: "Tulang ayam direbus perlahan, bukan mendidih besar. Hasilnya kuah bening tapi gurih dalam. Kami melakukannya 8 jam tiap subuh.",
  },
  {
    no: "02",
    title: "Jangan Overcook Mie",
    desc: "Mie segar matang dalam hitungan menit. Angkat saat masih kenyal karena mie lanjut matang di mangkok panas.",
  },
  {
    no: "03",
    title: "Ayam Kecap Dimasak Perlahan",
    desc: "Ayam kampung dimasak dengan kecap di api kecil sampai bumbu meresap. Ini yang bikin topping tidak amis.",
  },
  {
    no: "04",
    title: "Sambal Dipisah, Bukan Dicampur",
    desc: "Selalu sajikan sambal terpisah supaya anak-anak bisa makan versi tidak pedas dan yang dewasa bebas atur level.",
  },
];

export default function TipsPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero
        eyebrow="Tips & Resep"
        title="Rahasia Dapur Terbuka"
        desc="Kami tidak pelit ilmu. Ini prinsip yang kami pakai tiap hari, bisa kamu coba di dapur sendiri."
        section="Artikel"
      />
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <figure className="relative mb-8 h-60 w-full overflow-hidden rounded-[2rem] shadow-xl sm:h-80 sm:rounded-[3rem]">
            <Image
              src="/img/mi-ayam-kepala.jpg"
              alt="Proses memasak topping ayam di wajan besar"
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              className="object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#2c231b]/80 px-4 py-2 text-xs font-medium text-[#fdf8f5] backdrop-blur-sm">
              Api kecil, waktu panjang, rasa dalam
            </figcaption>
          </figure>
        </Reveal>
        <div className="space-y-4 sm:space-y-6">
          {tips.map((t, i) => (
            <Reveal key={t.no} delay={Math.min(i * 80, 240)}>
              <article className="flex gap-5 rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                <span
                  className="font-poppins text-2xl font-extrabold text-[#f5b041] sm:text-3xl"
                  aria-hidden="true"
                >
                  {t.no}
                </span>
                <div>
                  <h2 className="font-poppins text-lg font-bold text-[#2c231b] sm:text-xl">
                    {t.title}
                  </h2>
                  <p className="mt-1 font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base">
                    {t.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <RelatedPages />
      <PageCta
        title="Malas masak? Biar kami saja"
        desc="Tips di atas butuh waktu 8 jam. Atau pesan semangkok hangat dalam hitungan menit."
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
