"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const reviews = [
  {
    name: "Lutfi Muzayyanah",
    rating: 5,
    text: "Mie ayam langganan, rasanya enak, harga murah meriah. Mie produksi sendiri, bisa buat arisan dan kumpul bareng temen. Owner ramah, bisa request sesuai kemauan.",
    date: "2 minggu lalu",
  },
  {
    name: "Ahmad Fauzi",
    rating: 5,
    text: "Porsi banyak, ayamnya nggak pelit, baksonya kenyal. Langganan dari 2021, rasa konsisten. Anak-anak suka, nggak pedas.",
    date: "1 bulan lalu",
  },
  {
    name: "Siti Aminah",
    rating: 5,
    text: "Tempat bersih, pelayanan cepat. Kuah kaldu gurih, nggak terlalu asin. Buat makan bareng keluarga enak, meja luas.",
    date: "3 minggu lalu",
  },
  {
    name: "Rizki Pratama",
    rating: 4,
    text: "Mie kenyal, sambal mantap. Parkir agak sempit kalau sore, tapi overall puas. Harga pas untuk porsi segini.",
    date: "5 hari lalu",
  },
  {
    name: "Dewi Lestari",
    rating: 5,
    text: "Sering pesan antar, packing rapi, masih hangat sampai rumah. Bakso hotplate favorit, seafoodnya segar.",
    date: "1 minggu lalu",
  },
  {
    name: "Bambang Wijaya",
    rating: 5,
    text: "Owner ramah, bisa request mie setengah porsi buat anak. Lokasi gampang dicari, dekat jalan besar. Bakal balik lagi.",
    date: "2 hari lalu",
  },
];

export default function Testimonial() {
  const googleMapsLink = "https://share.google/QOCQKq5zvoVVkb4pm";
  const marqueeItems = [...reviews, ...reviews, ...reviews];
  const [isPressed, setIsPressed] = useState(false);

  return (
    <section id="testimoni" className="relative pt-14 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 bg-[#fdf8f5] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #2c231b 1px, transparent 0)`, backgroundSize: `24px 24px` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <Reveal>
          <div className="text-center">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f5b041]/15 text-[#2c231b] font-bold text-[11px] mb-4 uppercase tracking-[0.14em] border border-[#f5b041]/20">
              Testimoni
            </div>
            <h2 className="text-[28px] sm:text-4xl md:text-[42px] font-extrabold text-[#2c231b] font-poppins leading-[1.1] tracking-[-0.02em] text-balance mb-3">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-[13px] sm:text-sm text-[#2c231b]/55 font-inter max-w-xl mx-auto leading-relaxed mb-1 font-medium">
              Cerita jujur dari meja sebelah. Tanpa filter, tanpa naskah
            </p>
            <p className="text-[11px] text-[#2c231b]/35 font-inter mb-8 tracking-[0.08em] uppercase flex items-center justify-center gap-2">
              <span>Mengalir terus</span>
              <span className="w-1 h-1 bg-[#2c231b]/20 rounded-full" aria-hidden="true"></span>
              <span className={isPressed ? "text-[#f5b041] font-bold" : ""}>{isPressed ? "Jeda, lepas untuk lanjut" : "Klik & tahan untuk jeda"}</span>
            </p>
          </div>
        </Reveal>

        <div
          className="relative w-full overflow-hidden group py-4 select-none touch-pan-y"
          aria-label="Ulasan pelanggan berjalan terus menerus, klik dan tahan untuk jeda"
          role="region"
          aria-live="off"
          onMouseDown={(e) => { e.preventDefault(); setIsPressed(true); }}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onTouchCancel={() => setIsPressed(false)}
        >
          <div
            className={`flex w-max animate-marquee gap-3 sm:gap-4 py-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none hover:[animation-play-state:paused] cursor-grab ${isPressed ? "cursor-grabbing" : ""}`}
            style={{ animationPlayState: isPressed ? "paused" : "running" }}
          >
            {marqueeItems.map((rev, idx) => (
              <div
                key={`${rev.name}-${idx}`}
                className="w-[280px] sm:w-[320px] lg:w-[340px] bg-white rounded-[1.5rem] p-5 relative shadow-[0_8px_30px_rgba(44,35,27,0.10)] border border-[#2c231b]/5 shrink-0 flex flex-col justify-between min-h-[170px] sm:min-h-[178px] h-auto hover:shadow-[0_12px_32px_rgba(44,35,27,0.14)] transition-shadow duration-300"
              >
                <div className="absolute top-3.5 right-3.5 opacity-[0.06]">
                  <i className="fas fa-quote-right text-xl text-[#f5b041]" aria-hidden="true"></i>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-[11px] ${i < rev.rating ? "text-[#f5b041]" : "text-gray-200"}`} aria-hidden="true"></i>
                  ))}
                </div>
                <p className="text-[13.5px] text-[#2c231b]/80 font-inter leading-[1.6] line-clamp-4 flex-1">“{rev.text}”</p>
                <div className="flex items-center justify-between pt-3.5 mt-4 border-t border-[#2c231b]/5">
                  <h5 className="font-bold text-[#2c231b] font-poppins text-[13px] leading-tight truncate pr-2">{rev.name}</h5>
                  <span className="text-[11px] text-[#2c231b]/40 font-medium shrink-0">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={300}>
          <div className="text-center mt-8 sm:mt-10">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat semua ulasan di Google Maps"
              className="inline-flex items-center gap-2.5 text-[#2c231b] font-bold bg-white px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-[#2c231b] hover:text-white transition-all duration-300 text-[13px] sm:text-sm border border-[#2c231b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]/40"
            >
              Lihat di Google Maps <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
            <p className="text-[11px] text-[#2c231b]/30 mt-3 font-medium tracking-wide">Buka di tab baru • Sumber Google Maps</p>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#2c231b" position="bottom" />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
