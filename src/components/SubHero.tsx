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
        className="pointer-events-none absolute -right-20 -top-20 aspect-square w-[320px] rounded-full bg-[#f5b041]/10 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Jejak halaman" className="animate__animated animate__fadeInDown mb-6 flex items-center gap-2 text-xs font-medium text-[#2c231b]/50">
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
          className="animate__animated animate__fadeInUp inline-block rounded-full border border-[#f5b041]/30 bg-[#f5b041]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2c231b]"
          style={{ animationDelay: "80ms" }}
        >
          {eyebrow}
        </div>
        <h1
          className="animate__animated animate__fadeInUp mt-4 max-w-3xl font-poppins text-3xl font-extrabold leading-tight tracking-tight text-[#2c231b] text-balance sm:text-4xl md:text-5xl"
          style={{ animationDelay: "160ms" }}
        >
          {title}
        </h1>
        <p
          className="animate__animated animate__fadeInUp mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base lg:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          {desc}
        </p>
      </div>
    </section>
  );
}
