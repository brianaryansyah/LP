"use client";
import { useEffect, useState } from "react";

const ritme = [
  { time: "04.00", desc: "Adonan mie disiapkan dan ditarik", hour: 4 },
  { time: "05.00", desc: "Kaldu mulai direbus 8 jam", hour: 5 },
  { time: "10.00", desc: "Warung buka, mie pertama disajikan", hour: 10 },
  { time: "22.00", desc: "Tutup, dapur dibersihkan total", hour: 22 },
];

export default function RitmeTimeline() {
  const [now, setNow] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  useEffect(() => {
    setNow(new Date().getHours());
    const id = setInterval(() => setNow(new Date().getHours()), 60000);
    return () => clearInterval(id);
  }, []);
  const isActive = (h: number) => {
    if (now === null) return false;
    if (h === 22) return now >= 22 || now < 4;
    if (h === 4) return now >= 4 && now < 5;
    if (h === 5) return now >= 5 && now < 10;
    if (h === 10) return now >= 10 && now < 22;
    return false;
  };
  return (
    <div className="mt-5 relative">
      <div className="hidden lg:block absolute top-[34px] left-6 right-6 h-px bg-white/10" aria-hidden="true" />
      <div className="hidden sm:block lg:hidden absolute left-[26px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4">
        {ritme.map((r, i) => {
          const active = isActive(r.hour) || hover === i;
          return (
            <div
              key={r.time}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`group relative flex lg:flex-col items-center lg:items-center gap-4 rounded-2xl border px-4 py-4 lg:px-4 lg:py-6 lg:text-center transition-[border-color,background-color,transform] duration-300 cursor-default ${active ? "bg-white/[0.06] border-white/15 lg:-translate-y-1 lg:shadow-[0_8px_24px_rgba(0,0,0,0.12)]" : "bg-transparent border-white/5 hover:bg-white/[0.04] hover:border-white/10"}`}
            >
              <span className={`hidden lg:block absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-[#2c231b] transition-[background-color,border-color,transform] duration-300 ${active ? "bg-[#f5b041] border-[#f5b041] scale-110" : "border-white/20 group-hover:border-[#f5b041]/40"}`} aria-hidden="true" />
              <span className={`hidden sm:block lg:hidden absolute left-[18px] h-2 w-2 rounded-full transition-colors duration-300 ${active ? "bg-[#f5b041]" : "bg-white/20 group-hover:bg-white/40"}`} aria-hidden="true" />
              <span className={`shrink-0 font-poppins text-sm font-extrabold tracking-tight transition-colors duration-300 ${active ? "text-[#f5b041]" : "text-white/90 group-hover:text-white"}`}>{r.time}</span>
              <span className={`flex-1 lg:flex-none font-inter text-sm leading-snug transition-colors duration-300 ${active ? "text-white font-medium" : "text-white/70 group-hover:text-white/90"}`}>{r.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
