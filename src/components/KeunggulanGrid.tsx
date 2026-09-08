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
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {points.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 100}>
          <div
            onClick={() => setActive(active === i ? null : i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(active === i ? null : i); } }}
            className={`group h-full text-left rounded-2xl border p-6 shadow-sm cursor-pointer transition-[transform,box-shadow,border-color,background-color] duration-300 will-change-transform sm:rounded-xl ${active === i ? "bg-[#2c231b] border-[#2c231b] shadow-[0_12px_28px_rgba(44,35,27,0.18)] -translate-y-1" : "bg-white border-[#2c231b]/5 hover:-translate-y-1 hover:shadow-md hover:border-[#f5b041]/30"}`}
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${active === i ? "bg-white/10 text-[#f5b041]" : "bg-[#f5b041]/15 text-[#f5b041]"}`} aria-hidden="true">
              <i className={p.icon} aria-hidden="true"></i>
            </div>
            <h2 className={`font-poppins text-lg font-bold ${active === i ? "text-white" : "text-[#2c231b]"}`}>{p.title}</h2>
            <p className={`mt-1 font-inter text-sm leading-relaxed ${active === i ? "text-white/70" : "text-[#2c231b]/70"}`}>{p.desc}</p>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${active === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className={`text-xs leading-relaxed rounded-lg px-3 py-2 ${active === i ? "bg-white/10 text-white/80" : ""}`}>{p.extra}</p>
              </div>
            </div>
            <span className={`mt-3 inline-flex items-center gap-1 text-xs font-bold ${active === i ? "text-[#f5b041]" : "text-[#e09132]"}`}>{active === i ? "Tutup" : "Lihat detail"} <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${active === i ? "rotate-180" : ""}`} aria-hidden="true"></i></span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
