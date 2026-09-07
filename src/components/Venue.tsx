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
    desc: "Pojok dekat kasir, karpet dan ayunan kecil. Dari meja masih kelihatan anak main.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    alt: "Area playground anak di Semangkok",
    icon: "fas fa-child",
    badge: "Di dalam",
  },
  {
    title: "WiFi Gratis",
    desc: "Password tanya kasir. Cukup buat nunggu pesanan atau buka tugas sebentar.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Pengunjung bekerja dengan laptop di warung Semangkok",
    icon: "fas fa-wifi",
    badge: "Tanya kasir",
  },
  {
    title: "TV Bersama",
    desc: "Di dinding dekat kasir. Kalau ada bola, biasanya meja ikut nonton bareng.",
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    alt: "Fasilitas TV layar besar untuk nonton bareng",
    icon: "fas fa-tv",
    badge: "Di dinding",
  },
  {
    title: "Karaoke Santai",
    desc: "Alat standby di gudang. Keluar kalau ada yang minta malam minggu, suara dijaga.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    alt: "Mikrofon karaoke keluarga di Semangkok",
    icon: "fas fa-microphone-alt",
    badge: "Malam minggu",
  },

];

function VenueHero() {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#2c231b]/10 lg:row-span-2 shadow-[0_10px_30px_rgba(44,35,27,0.06)] hover:shadow-[0_16px_40px_rgba(44,35,27,0.1)] transition-shadow duration-500">
      <div className="relative h-[300px] sm:h-[360px] lg:h-[380px] lg:flex-1 w-full overflow-hidden shrink-0">
        <Image src={VENUE_PHOTO.src} alt={VENUE_PHOTO.alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" loading="lazy" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#2c231b] border border-[#2c231b]/10 shadow-sm">Jl. Karimata No.40</span>
          <span className="rounded-full bg-[#2c231b] px-3 py-1 text-xs font-bold text-white shadow-sm">10–22</span>
        </div>
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-poppins text-[17px] font-bold leading-tight text-[#2c231b]">Ruang makan biasa, buat kumpul keluarga</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#2c231b]/65">Meja dan kursi tertata biasa. Cukup untuk makan bareng.</p>
        <a href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-[#2c231b] px-4 py-2 text-sm font-bold text-white hover:bg-black transition-colors duration-300">
          Lihat foto lokasi
        </a>
      </div>
    </div>
  );
}

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#2c231b]/10 shadow-[0_8px_24px_rgba(44,35,27,0.05)] hover:shadow-[0_14px_32px_rgba(44,35,27,0.09)] transition-shadow duration-500">
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image src={facility.img} alt={facility.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2c231b] border border-[#2c231b]/10 shadow-sm">{facility.badge}</span>
      </div>
      <div className="flex flex-1 items-start gap-3 p-4 sm:p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdf8f5] border border-[#2c231b]/10 text-sm text-[#2c231b] group-hover:bg-[#2c231b] group-hover:text-white group-hover:border-[#2c231b] transition-colors duration-300" aria-hidden="true">
          <i className={facility.icon}></i>
        </span>
        <div>
          <h3 className="font-poppins text-[14px] font-bold text-[#2c231b]">{facility.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#2c231b]/65">{facility.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function Venue() {
  return (
    <section id="fasilitas" className="relative flex scroll-mt-20 flex-col justify-center overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-4 inline-block rounded-full border border-[#f5b041]/30 bg-[#f5b041]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2c231b]">
              Suasana & Fasilitas
            </span>
            <h2 className="mx-auto max-w-2xl text-balance font-poppins text-3xl font-extrabold tracking-tight text-[#2c231b] sm:text-4xl md:text-5xl">
              Tempat makan yang sederhana
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#2c231b]/70 sm:text-base lg:text-lg">
              Ruang makan cukup luas untuk keluarga. Beberapa fasilitas ada untuk kenyamanan, dipakai seperlunya.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <VenueHero />
          </Reveal>
          {FACILITIES.map((facility, idx) => (
            <Reveal key={facility.title} delay={Math.min(idx * 70, 210)}>
              <FacilityCard facility={facility} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#2c231b]/10 bg-[#fdf8f5] px-5 py-4 sm:flex-row">
            <p className="text-center font-inter text-sm text-[#2c231b]/70 sm:text-left">
              <span className="font-bold text-[#2c231b]">Butuh meja dekat playground?</span> Hubungi kami, kami atur kalau memungkinkan.
            </p>
            <a href="https://wa.me/6285640734972?text=Halo%20Semangkok%2C%20saya%20ingin%20reservasi%20meja%20dekat%20playground." target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2c231b] px-5 py-2.5 text-sm font-bold text-white hover:bg-black transition-colors">
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Booking meja
            </a>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}
