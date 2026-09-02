"use client";
import { useRef, useState, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(Math.floor(reviews.length / 2));
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
      el.scrollTo({ left, behavior: "smooth" });
      setActive(index);
    }
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, idx) => {
      const c = child as HTMLElement;
      const childCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = idx;
      }
    });
    setActive(closest);
  };

  useEffect(() => {
    const id = setTimeout(() => scrollTo(Math.floor(reviews.length / 2)), 100);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % reviews.length;
        scrollTo(next);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimoni" className="relative py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden motion-safe:scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-12 sm:pb-16">
        <Reveal>
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
              Testimoni
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins leading-tight tracking-tight text-balance mb-3">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-sm text-[#2c231b]/60 font-inter max-w-xl mx-auto leading-relaxed mb-1">
              Cerita jujur dari meja sebelah — tanpa filter, tanpa naskah
            </p>
            <p className="text-xs text-[#2c231b]/40 font-inter mb-8 tracking-wide">Berjalan otomatis • Arahkan kursor untuk jeda</p>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") { e.preventDefault(); scrollTo((active + 1) % reviews.length); setIsPaused(true); }
              if (e.key === "ArrowLeft") { e.preventDefault(); scrollTo((active - 1 + reviews.length) % reviews.length); setIsPaused(true); }
            }}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Ulasan pelanggan berjalan otomatis, gunakan panah kiri kanan untuk navigasi"
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-4 sm:px-8 scrollbar-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]/40 rounded-2xl"
            style={{ scrollbarWidth: "none" }}
          >
            {reviews.map((rev, idx) => (
              <div
                key={rev.name}
                onClick={() => scrollTo(idx)}
                className={`w-[300px] sm:w-[340px] snap-center bg-white rounded-[1.5rem] p-5 relative shadow-md border border-[#2c231b]/5 transition-all duration-300 will-change-transform text-left flex flex-col justify-between shrink-0 cursor-pointer group min-h-[170px] max-h-[185px] motion-reduce:transition-none ${
                  idx === active
                    ? "opacity-100 scale-[1.02] shadow-xl border-[#f5b041]/20"
                    : "opacity-70 scale-[0.97] hover:opacity-90"
                }`}
              >
                <div className="absolute top-3.5 right-3.5 opacity-[0.06] group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-quote-right text-xl text-[#f5b041]" aria-hidden="true"></i>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-[11px] ${i < rev.rating ? "text-[#f5b041]" : "text-gray-200"}`} aria-hidden="true"></i>
                  ))}
                </div>
                <p className="text-[13.5px] text-[#2c231b]/80 font-inter leading-[1.6] line-clamp-4 flex-1">
                  “{rev.text}”
                </p>
                <div className="flex items-center justify-between pt-3.5 mt-4 border-t border-[#2c231b]/5">
                  <h5 className="font-bold text-[#2c231b] font-poppins text-[13px] leading-tight truncate pr-2">{rev.name}</h5>
                  <span className="text-[11px] text-[#2c231b]/40 font-medium shrink-0">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-6" role="tablist" aria-label="Pilihan ulasan">
            {reviews.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Ulasan ${i + 1} dari ${reviews.length}`}
                onClick={() => { scrollTo(i); setIsPaused(true); }}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]/40 ${i === active ? "w-6 bg-[#f5b041]" : "w-1.5 bg-[#2c231b]/15 hover:bg-[#2c231b]/25"}`}
              />
            ))}
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
