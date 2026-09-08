"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const points = [
  { icon: "fas fa-clock", title: "Kaldu 8 Jam", desc: "Tulang ayam kampung direbus perlahan sejak subuh. Gurihnya alami, tanpa penyedap berlebih.", extra: "Direbus di panci besar, api kecil, disaring tiap jam agar bening." },
  { icon: "fas fa-utensils", title: "Mie Ditarik Tangan", desc: "Adonan segar dibuat tiap pagi. Teksturnya kenyal saat digigit, tidak lembek.", extra: "Ditarik menjelang buka, jadi tidak mengembang di kuah." },
  { icon: "fas fa-drumstick-bite", title: "Ayam Kampung", desc: "Topping ayam kampung dimasak kecap perlahan. Porsinya tidak pelit.", extra: "Ayam kampung asli, dimasak 2 jam hingga meresap." },
  { icon: "fas fa-wallet", title: "Harga Merakyat", desc: "Mulai Rp 15.000 per mangkok. Porsi secukupnya.", extra: "Pas untuk pelajar, keluarga, dan arisan." },
  { icon: "fas fa-certificate", title: "100% Halal", desc: "Semua bahan bersertifikasi resmi. Aman untuk keluarga dan anak-anak.", extra: "Sertifikat halal terpajang di kasir, bisa dilihat." },
  { icon: "fas fa-motorcycle", title: "Pesan Antar Hangat", desc: "Packing rapi, sampai rumah masih hangat. Bisa pesan untuk arisan juga.", extra: "Box sekat kuah terpisah, tidak tumpah di jalan." },
];

export default function KeunggulanGrid() {
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {points.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 90}>
          <div
            className="perspective-1000 h-[240px] sm:h-[230px] cursor-pointer touch-manipulation group"
            onMouseEnter={() => setFlipped(i)}
            onMouseLeave={() => setFlipped(null)}
            onClick={() => setFlipped(flipped === i ? null : i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped(flipped === i ? null : i); } }}
            aria-label={`${p.title} detail`}
            aria-pressed={flipped === i}
          >
            <div className={`relative h-full w-full preserve-3d transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${flipped === i ? "rotate-y-180" : "group-hover:rotate-y-180"}`}>
              <div className="absolute inset-0 backface-hidden rounded-2xl border border-[#2c231b]/5 bg-white p-6 shadow-sm flex flex-col sm:rounded-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5b041]/15 text-[#f5b041] text-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <i className={p.icon} aria-hidden="true"></i>
                </div>
                <h2 className="mt-4 font-poppins text-base font-bold text-[#2c231b]">{p.title}</h2>
                <p className="mt-1 font-inter text-xs leading-relaxed text-[#2c231b]/65 flex-1">{p.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#e09132]">Lihat detail <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i></span>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-[#2c231b] border border-[#2c231b] p-6 shadow-[0_12px_28px_rgba(44,35,27,0.18)] flex flex-col sm:rounded-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#f5b041] text-lg" aria-hidden="true">
                  <i className={p.icon} aria-hidden="true"></i>
                </div>
                <h3 className="mt-4 font-poppins text-base font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75 flex-1">{p.extra}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f5b041]">Tutup <i className="fas fa-times text-[10px]" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
