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
    <section className="bg-white border-y border-[#2c231b]/10 py-12 sm:py-16">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="font-poppins text-xl font-extrabold tracking-tight text-[#2c231b] text-balance sm:text-2xl">{title}</h2>
          <p className="mt-2 max-w-xl font-inter text-sm leading-relaxed text-[#2c231b]/60">{desc}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={waLink("Halo Semangkok, saya ingin memesan.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2c231b] px-5 py-2.5 text-sm font-bold text-white hover:bg-black transition-colors">
            <i className="fab fa-whatsapp" aria-hidden="true"></i> Pesan via WhatsApp
          </a>
          <Link href="/#reservasi" className="inline-flex items-center gap-2 rounded-full border border-[#2c231b]/15 px-5 py-2.5 text-sm font-bold text-[#2c231b] hover:border-[#2c231b]/30 transition-colors">
            Reservasi Meja
          </Link>
        </div>
      </div>
    </section>
  );
}
