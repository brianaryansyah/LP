import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

interface Facility {
  title: string;
  desc: string;
  img: string;
  alt: string;
  icon: string;
  badge: string;
}

const VENUE_PHOTO = {
  src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  alt: "Suasana ruang makan Mie Ayam Semangkok yang luas dan bersih",
};

const FACILITIES: Facility[] = [
  {
    title: "Playground Anak",
    desc: "Perosotan & mandi bola di sudut keluarga. Anak main, ayah ibu makan tenang.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    alt: "Area playground anak di Semangkok",
    icon: "fas fa-child",
    badge: "Gratis",
  },
  {
    title: "WiFi Kencang",
    desc: "Nugas, kerja, atau upload konten. Colokan di tiap sudut meja.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Pengunjung bekerja dengan laptop di warung Semangkok",
    icon: "fas fa-wifi",
    badge: "100 Mbps",
  },
  {
    title: "TV & Nonton Bareng",
    desc: "Layar besar untuk live bola dan acara keluarga. Suara jernih.",
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    alt: "Fasilitas TV layar besar untuk nonton bareng",
    icon: "fas fa-tv",
    badge: "Layar besar",
  },
  {
    title: "Karaoke Keluarga",
    desc: "Malam minggu nyanyi bareng. Request lagu Indonesia & dangdut.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    alt: "Mikrofon karaoke keluarga di Semangkok",
    icon: "fas fa-microphone-alt",
    badge: "Jum–Min",
  },

];

function VenueHero() {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 lg:row-span-2 lg:min-h-[560px]">
      <Image
        src={VENUE_PHOTO.src}
        alt={VENUE_PHOTO.alt}
        fill
        sizes="(max-width: 1024px) 90vw, 40vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c231b]/85 via-[#2c231b]/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 right-0 top-4 flex items-start justify-between px-5">
        <span className="rounded-full bg-[#fdf8f5]/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2c231b] shadow-md backdrop-blur-sm">
          <i className="fas fa-store mr-2 text-[#e09132]" aria-hidden="true"></i>
          Jl. Karimata No.40
        </span>
        <span className="rounded-full bg-[#f5b041] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2c231b] shadow-md">
          Buka 10–22
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="font-poppins text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          Warungnya lega,
          <br />
          makannya betah.
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
          Datang bawa keluarga besar bisa. Bawa anak kecil aman, bawa rombongan arisan muat.
        </p>
        <a
          href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-[#2c231b] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5b041] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <i className="fas fa-map-marked-alt text-[#e09132]" aria-hidden="true"></i>
          Lihat foto lokasi
        </a>
      </div>
    </div>
  );
}

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-lg ring-1 ring-[#2c231b]/5 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden sm:h-48">
        <Image
          src={facility.img}
          alt={facility.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#2c231b]/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f5b041] backdrop-blur-sm">
          {facility.badge}
        </span>
      </div>
      <div className="flex flex-1 items-start gap-4 p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f5b041]/15 text-lg text-[#e09132]" aria-hidden="true">
          <i className={facility.icon}></i>
        </span>
        <div>
          <h3 className="font-poppins text-base font-bold text-[#2c231b] sm:text-lg">{facility.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#2c231b]/65 sm:text-sm">{facility.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function Venue() {
  return (
    <section id="fasilitas" className="relative flex scroll-mt-20 flex-col justify-center overflow-hidden bg-white py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-24 aspect-square w-[320px] rounded-full bg-[#f5b041]/10 blur-[100px]" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-4 inline-block rounded-full border border-[#f5b041]/30 bg-[#f5b041]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2c231b]">
              Suasana & Fasilitas
            </span>
            <h2 className="mx-auto max-w-2xl text-balance font-poppins text-3xl font-extrabold tracking-tight text-[#2c231b] sm:text-4xl md:text-5xl">
              Bukan sekadar makan, tapi nongkrong
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base lg:text-lg">
              Ada playground buat anak, WiFi buat nugas, TV buat nobar, dan karaoke buat keluarga.
              Semua gratis untuk pembeli.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <VenueHero />
          </Reveal>
          {FACILITIES.map((facility, idx) => (
            <Reveal key={facility.title} delay={Math.min(idx * 80, 320)}>
              <FacilityCard facility={facility} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[1.75rem] bg-[#2c231b] px-6 py-6 sm:flex-row sm:px-8">
            <p className="text-center font-inter text-sm text-[#fdf8f5]/80 sm:text-left sm:text-base">
              <span className="font-bold text-[#f5b041]">Mau reservasi meja dekat playground?</span>
              <br className="hidden sm:block" /> Chat kami, kami siapkan sebelum datang.
            </p>
            <a
              href="https://wa.me/6285640734972?text=Halo%20Semangkok%2C%20saya%20ingin%20reservasi%20meja%20dekat%20playground."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5b041] px-6 py-3 text-sm font-bold text-[#2c231b] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
              Booking meja
            </a>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}
