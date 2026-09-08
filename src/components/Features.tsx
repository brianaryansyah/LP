"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Features() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };
  const reset = () => setTilt({ x: 0, y: 0 });
  return (
    <section id="unggulan" className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#f5b041]/10 blur-[70px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#2c231b]/5 blur-[60px]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <Reveal>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 mb-12 lg:mb-16">
          {/* Left Single Photo interactive tilt */}
          <div className="flex-1 w-full relative max-w-[520px] mx-auto lg:max-w-none perspective-1000">
            <div
              onMouseMove={onMove}
              onMouseLeave={reset}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] border border-[#2c231b]/10 shadow-[0_16px_40px_rgba(44,35,27,0.12)] group will-change-transform transition-transform duration-300 ease-out"
              style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            >
              <Image src="/img/mi-ayam-kepala.jpg" alt="Ayam kecap dimasak di wajan besar dapur Semangkok" fill sizes="(max-width: 640px) 90vw, 40vw" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" loading="lazy" quality={85} />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-[#2c231b]/10 shadow-[0_8px_20px_rgba(44,35,27,0.14)]">
                <span className="block text-[13px] font-extrabold text-[#2c231b] font-poppins leading-none">Dapur Karimata</span>
                <span className="text-[11px] font-medium tracking-wide text-[#2c231b]/60">Disiapkan tiap pagi</span>
              </div>
            </div>
          </div>

          {/* Right Text professional description */}
          <div className="flex-1 text-left w-full relative">
            <span className="pointer-events-none absolute -top-8 -left-2 hidden lg:block font-poppins text-[88px] font-black leading-none tracking-tighter text-[#2c231b]/[0.04] select-none" aria-hidden="true">01</span>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
              Mengapa Memilih Kami
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#2c231b] font-poppins leading-tight tracking-tight text-balance mb-4">
              Mie ayam yang dimasak harian
            </h2>
            <p className="text-[15px] sm:text-base text-[#2c231b]/70 font-inter leading-relaxed">
              Setiap pagi adonan mie kami uleni dan ditarik segar, kaldu ayam direbus perlahan hingga bening dan gurih, ayam kecap dimasak dengan bumbu yang meresap. Semua proses dilakukan di dapur Jl. Karimata 40 agar rasa konsisten dari mangkok pertama sampai terakhir.
            </p>
            <p className="text-[15px] sm:text-base text-[#2c231b]/70 font-inter leading-relaxed mt-4">
              Kami tidak mengejar porsi besar semata, tapi keseimbangan mie yang kenyal, kuah yang tidak enek, dan topping yang cukup. Anak bisa makan tanpa kepedasan, tamu dewasa bisa tambah sambal sesuai selera.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex gap-3 rounded-xl bg-[#fdf8f5] border border-[#2c231b]/5 p-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-[#2c231b]/10 text-[#2c231b] mt-0.5" aria-hidden="true"><i className="fas fa-leaf text-xs"></i></span>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">Bahan dipilih harian</h4>
                  <p className="text-xs text-[#2c231b]/60 leading-relaxed mt-1">Ayam segar pasar pagi, mie tanpa pengawet, sayur dicuci dan ditiriskan sebelum jam buka.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-white border border-[#2c231b]/10 p-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5b041] text-white mt-0.5" aria-hidden="true"><i className="fas fa-clock text-xs"></i></span>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">Proses yang sabar</h4>
                  <p className="text-xs text-[#2c231b]/60 leading-relaxed mt-1">Kaldu 8 jam, ayam dimasak perlahan, mie ditarik menjelang buka agar tetap kenyal.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-white border border-[#2c231b]/10 p-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2c231b] text-white mt-0.5" aria-hidden="true"><i className="fas fa-heart text-xs"></i></span>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">Rasa yang dijaga</h4>
                  <p className="text-xs text-[#2c231b]/60 leading-relaxed mt-1">Takaran bumbu tercatat, tidak asal tambah penyedap, setiap mangkok ditakar sama.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}