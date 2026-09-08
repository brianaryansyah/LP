import Link from "next/link";

interface SubHeroProps {
  eyebrow: string;
  title: string;
  desc: string;
  section: string;
}

export default function SubHero({ eyebrow, title, desc, section }: SubHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#fdf8f5] pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div
        className="pointer-events-none absolute -right-20 -top-20 aspect-square w-[320px] rounded-full bg-[#f5b041]/12 blur-[90px]"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute -left-20 bottom-0 aspect-square w-[280px] rounded-full bg-[#2c231b]/5 blur-[70px]"
        aria-hidden="true"
      ></div>
      <span className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-poppins text-[96px] font-black tracking-tighter text-[#2c231b]/[0.04] lg:block select-none" aria-hidden="true">
        {eyebrow.split(" ")[0].toUpperCase()}
      </span>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Jejak halaman" className="animate-fadeUp mb-6 flex items-center gap-2 text-xs font-medium text-[#2c231b]/50" style={{ animationDelay: "20ms" }}>
          <Link href="/" className="transition-colors duration-200 hover:text-[#e09132]">
            Beranda
          </Link>
          <i className="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
          <span className="text-[#2c231b]/70">{section}</span>
          <i className="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
          <span aria-current="page" className="font-bold text-[#2c231b]">
            {eyebrow}
          </span>
        </nav>
        <div
          className="animate-fadeUp inline-block rounded-full border border-[#f5b041]/30 bg-[#f5b041]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2c231b]"
          style={{ animationDelay: "80ms" }}
        >
          {eyebrow}
        </div>
        <h1
          className="animate-fadeUp mt-4 max-w-3xl font-poppins text-3xl font-extrabold leading-tight tracking-tight text-[#2c231b] text-balance sm:text-4xl md:text-5xl"
          style={{ animationDelay: "160ms" }}
        >
          {title}
        </h1>
        <p
          className="animate-fadeUp mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base lg:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          {desc}
        </p>
      </div>
    </section>
  );
}
