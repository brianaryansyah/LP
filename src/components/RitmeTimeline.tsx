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
    <ul className="mt-5 space-y-3 relative">
      <li className="absolute left-[26px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" aria-hidden="true" />
      {ritme.map((r, i) => {
        const active = isActive(r.hour) || hover === i;
        return (
          <li
            key={r.time}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={`group relative flex items-center gap-4 rounded-xl px-2 py-2 transition-[background-color,transform] duration-300 cursor-default ${active ? "bg-white/10 translate-x-1" : "hover:bg-white/5"}`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span className={`absolute left-[18px] hidden h-2 w-2 rounded-full sm:block transition-[transform,background-color] duration-300 ${active ? "bg-[#f5b041] scale-150 shadow-[0_0_10px_rgba(245,176,65,0.6)]" : "bg-white/30 group-hover:bg-[#f5b041]/60"}`} aria-hidden="true" />
            <span className={`w-14 shrink-0 rounded-lg px-2 py-1 text-center font-poppins text-sm font-extrabold transition-[transform,background-color,color] duration-300 ${active ? "bg-[#f5b041] text-[#2c231b] scale-105" : "bg-[#f5b041]/15 text-[#f5b041] group-hover:bg-[#f5b041]/25 group-hover:scale-105"}`}>
              {r.time}
            </span>
            <span className={`font-inter text-sm transition-colors duration-300 ${active ? "text-white font-semibold" : "text-[#fdf8f5]/80 group-hover:text-white"}`}>{r.desc}</span>
            {active && <span className="ml-auto hidden sm:inline-flex items-center gap-1 rounded-full bg-[#f5b041] px-2 py-1 text-[10px] font-bold text-[#2c231b] animate-pulse">Aktif</span>}
          </li>
        );
      })}
    </ul>
  );
}
