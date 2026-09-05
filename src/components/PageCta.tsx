import Link from "next/link";
import { waLink } from "@/data/navbar";

interface PageCtaProps {
  title?: string;
  desc?: string;
}

export default function PageCta({
  title = "Lapar sekarang?",
  desc = "Pesan langsung via WhatsApp atau amankan meja dulu. Buka tiap hari 10.00 sampai 22.00 WIB.",
}: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[#2c231b] py-14 sm:py-20">
      <div
        className="pointer-events-none absolute -left-20 top-0 aspect-square w-[280px] rounded-full bg-[#f5b041]/10 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="font-poppins text-2xl font-extrabold tracking-tight text-[#fdf8f5] text-balance sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl font-inter text-sm leading-relaxed text-[#fdf8f5]/65 sm:text-base">
            {desc}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={waLink("Halo Semangkok, saya ingin memesan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] shadow-lg transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
            Pesan via WhatsApp
          </a>
          <Link
            href="/#reservasi"
            className="inline-flex items-center gap-2 rounded-full border border-[#fdf8f5]/25 px-6 py-3 text-sm font-bold text-[#fdf8f5] transition-colors duration-300 hover:border-[#f5b041] hover:text-[#f5b041] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
          >
            Reservasi Meja
            <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
