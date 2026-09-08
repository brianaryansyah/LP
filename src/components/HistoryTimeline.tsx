"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const ITEMS: Item[] = [
  { title: "Gerobak Pasar Pagi", desc: "Berjualan dengan gerobak. Mie ditarik tangan tiap subuh, kaldu direbus di dapur rumah. Tamu pertama pedagang pasar dan anak sekolah.", img: "/img/mi-ayam-kepala.jpg", alt: "Wajan ayam kecap di dapur awal" },
  { title: "Pindah ke Karimata", desc: "Dapat tempat di Jl. Karimata No.40. Dapur lebih lega, meja lebih banyak, parkir lebih mudah. Cara masak tetap sama persis.", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", alt: "Ruang makan Karimata" },
  { title: "Warung keluarga", desc: "Sekarang banyak tamu yang datang bareng keluarga, arisan, atau pesan antar. Kami layani dengan resep yang sama, satu mangkok setiap kali.", img: "/img/mi-ayam-bakso.jpg", alt: "Mie ayam bakso disajikan" },
];

export default function HistoryTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const seen = Math.min(Math.max(vh * 0.6 - rect.top, 0), total);
      setProgress(total ? seen / total : 0);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.idx);
          if (e.isIntersecting) setVisible((v) => { const n = [...v]; n[idx] = true; return n; });
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    const els = wrapRef.current?.querySelectorAll("[data-idx]") ?? [];
    els.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2c231b]/10 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
      <div
        className="absolute left-4 top-0 w-px bg-[#f5b041] origin-top lg:left-1/2 lg:-translate-x-1/2 transition-transform duration-300 ease-out"
        style={{ height: "100%", transform: `scaleY(${progress})` }}
        aria-hidden="true"
      />
      {ITEMS.map((item, idx) => (
        <div
          key={item.title}
          data-idx={idx}
          className={`relative flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 lg:mb-12 transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"} ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          style={{ transitionDelay: `${idx * 80}ms` }}
        >
          <span className={`hidden lg:block absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-white shadow-sm transition-colors duration-300 ${visible[idx] ? "bg-[#f5b041] border-[#f5b041]" : "bg-[#fdf8f5] border-[#2c231b]/20"}`} aria-hidden="true" />
          <div className="flex-1 lg:w-1/2 pl-10 lg:pl-0">
            <div className={`bg-white rounded-2xl border border-[#2c231b]/10 p-5 sm:p-6 shadow-sm hover:shadow-[0_12px_28px_rgba(44,35,27,0.08)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-300 ${idx % 2 === 1 ? "lg:ml-8" : "lg:mr-8 lg:text-right"}`}>
              <h3 className="font-poppins text-base font-bold text-[#2c231b]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2c231b]/65">{item.desc}</p>
            </div>
          </div>
          <div className="flex-1 lg:w-1/2 pl-10 lg:pl-0">
            <button
              type="button"
              onClick={() => setActive(item)}
              className={`relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-[#2c231b]/10 shadow-sm group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${visible[idx] ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"} ${idx % 2 === 1 ? "lg:mr-8" : "lg:ml-8"}`}
              style={{ transitionDelay: `${idx * 80 + 140}ms` }}
              aria-label={`Lihat foto ${item.title} lebih besar`}
            >
              <Image src={item.img} alt={item.alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-active:scale-[1.02]" loading="lazy" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold text-[#2c231b] border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-[opacity,transform] duration-300">Perbesar</span>
            </button>
          </div>
        </div>
      ))}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeUp" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Foto ${active.title}`}>
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 sm:h-80">
              <Image src={active.img} alt={active.alt} fill className="object-cover" sizes="90vw" />
            </div>
            <div className="p-5">
              <h4 className="font-poppins text-base font-bold text-[#2c231b]">{active.title}</h4>
              <p className="mt-1 text-sm text-[#2c231b]/65">{active.desc}</p>
              <button type="button" onClick={() => setActive(null)} className="mt-4 rounded-full bg-[#2c231b] px-4 py-2 text-xs font-bold text-white hover:bg-black">Tutup</button>
            </div>
            <button type="button" onClick={() => setActive(null)} className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur p-2 text-[#2c231b] shadow-sm hover:bg-white" aria-label="Tutup">
              <i className="fas fa-times text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
