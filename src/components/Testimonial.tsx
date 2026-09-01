"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const reviews = [
  {
    name: "Lutfi Muzayyanah",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    text: "Mie ayam langganan.. rasanya enak.. harga murah meriah.. mie nya produksi sendiri katanya.. bisa buat tempat arisan dan kumpul bareng temen-temen, ownernya juga ramah bgt, bisa req sesuai kemauan kita.. lokasinya strategis, daya tampung skitar 40 orang..",
    date: "2 minggu lalu",
  },
  {
    name: "Ahmad Fauzi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Porsi banyak, ayamnya nggak pelit, baksonya kenyal. Langganan dari 2021, rasa konsisten. Anak-anak suka mie nya, nggak pedas.",
    date: "1 bulan lalu",
  },
  {
    name: "Siti Aminah",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9fef656e3?w=100&h=100&fit=crop",
    rating: 5,
    text: "Tempat bersih, pelayanan cepat. Kuah kaldunya gurih, nggak terlalu asin. Buat makan bareng keluarga enak, meja luas.",
    date: "3 minggu lalu",
  },
  {
    name: "Rizki Pratama",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 4,
    text: "Mie nya kenyal, sambal mantap. Parkir agak sempit kalau sore, tapi overall puas. Harga pas untuk porsi segini.",
    date: "5 hari lalu",
  },
  {
    name: "Dewi Lestari",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Sering pesan antar, packing rapi, masih hangat sampai rumah. Bakso hotplate favorit, seafood nya segar.",
    date: "1 minggu lalu",
  },
  {
    name: "Bambang Wijaya",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "Owner ramah, bisa request mie setengah porsi buat anak. Lokasi gampang dicari, dekat jalan besar. Bakal balik lagi.",
    date: "2 hari lalu",
  },
];

export default function Testimonial() {
  const googleMapsLink = "https://share.google/QOCQKq5zvoVVkb4pm";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
      setActive(index);
    }
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.children[0] as HTMLElement).offsetWidth);
    setActive(Math.max(0, Math.min(idx, reviews.length - 1)));
  };

  return (
    <section id="testimoni" className="relative py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-12 sm:pb-16">
        <Reveal>
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
              Testimoni
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins leading-tight tracking-tight text-balance mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-sm text-[#2c231b]/60 font-inter mb-2">17+ ulasan di Google Maps • Rata-rata 5.0/5</p>
            <p className="text-xs text-[#2c231b]/40 font-inter mb-8">Geser untuk lihat semua ulasan</p>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-4 sm:px-8 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
            aria-label="Daftar ulasan pelanggan, geser untuk melihat"
          >
            {reviews.map((rev, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={rev.name}
                  onClick={() => scrollTo(idx)}
                  className={`min-w-[82%] sm:min-w-[44%] lg:min-w-[30%] snap-center bg-white/90 backdrop-blur-xl rounded-[1.75rem] p-5 sm:p-6 relative shadow-lg border border-[#2c231b]/5 transition-all duration-500 text-left flex flex-col group shrink-0 cursor-pointer ${
                    isActive
                      ? "opacity-100 blur-0 scale-100 shadow-xl border-[#f5b041]/20"
                      : "opacity-60 blur-[1.5px] scale-[0.96] hover:opacity-80 hover:blur-[0.5px]"
                  }`}
                >
                <div className="absolute top-4 right-4 opacity-[0.07] group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-quote-right text-2xl text-[#f5b041]" aria-hidden="true"></i>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-xs ${i < rev.rating ? "text-[#f5b041]" : "text-gray-200"}`} aria-hidden="true"></i>
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] text-[#2c231b]/80 font-inter leading-relaxed mb-6 flex-grow">
                  “{rev.text}”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#2c231b]/5">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-white shadow-sm">
                    <Image src={rev.avatar} alt={rev.name} width={40} height={40} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="text-left min-w-0">
                    <h5 className="font-bold text-[#2c231b] font-poppins text-sm leading-tight truncate">{rev.name}</h5>
                    <p className="text-[#2c231b]/50 text-xs font-medium">Google Maps • {rev.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scrollTo(Math.max(0, active - 1))}
              aria-label="Ulasan sebelumnya"
              className="w-10 h-10 rounded-full bg-white border border-[#2c231b]/10 text-[#2c231b] flex items-center justify-center hover:bg-[#f5b041] hover:border-[#f5b041] hover:text-[#2c231b] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <i className="fas fa-chevron-left text-xs" aria-hidden="true"></i>
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ke ulasan ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#f5b041]" : "w-1.5 bg-[#2c231b]/20 hover:bg-[#2c231b]/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollTo(Math.min(reviews.length - 1, active + 1))}
              aria-label="Ulasan berikutnya"
              className="w-10 h-10 rounded-full bg-white border border-[#2c231b]/10 text-[#2c231b] flex items-center justify-center hover:bg-[#f5b041] hover:border-[#f5b041] hover:text-[#2c231b] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <i className="fas fa-chevron-right text-xs" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="text-center mt-10">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat semua ulasan di Google Maps"
              className="inline-flex items-center gap-2 text-[#2c231b] font-bold bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-[#f5b041] hover:text-[#2c231b] transition-all duration-300 text-sm border border-[#2c231b]/5"
            >
              Lihat semua di Google Maps <i className="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#2c231b" position="bottom" />
    </section>
  );
}
