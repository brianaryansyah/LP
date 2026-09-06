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
    desc: "Sudut kecil di area makan. Anak bisa main sementara menunggu pesanan.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    alt: "Area playground anak di Semangkok",
    icon: "fas fa-child",
    badge: "Tersedia",
  },
  {
    title: "WiFi Gratis",
    desc: "WiFi tersedia untuk pengunjung. Cocok buat yang mau sambil kerja santai.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Pengunjung bekerja dengan laptop di warung Semangkok",
    icon: "fas fa-wifi",
    badge: "Gratis",
  },
  {
    title: "TV Bersama",
    desc: "Ada TV di ruang makan. Biasanya nyala untuk acara umum.",
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    alt: "Fasilitas TV layar besar untuk nonton bareng",
    icon: "fas fa-tv",
    badge: "Tersedia",
  },
  {
    title: "Karaoke Santai",
    desc: "Karaoke ada di waktu tertentu, biasanya akhir pekan. Tanya staf untuk jadwal.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    alt: "Mikrofon karaoke keluarga di Semangkok",
    icon: "fas fa-microphone-alt",
    badge: "Akhir pekan",
  },

];

function VenueHero() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#2c231b]/10 lg:row-span-2 lg:min-h-[520px]">
      <Image src={VENUE_PHOTO.src} alt={VENUE_PHOTO.alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute left-3 top-3 flex gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2c231b] border border-[#2c231b]/10">Jl. Karimata No.40</span>
        <span className="rounded-full bg-[#2c231b] px-3 py-1 text-xs font-bold text-white">10–22</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-poppins text-lg font-bold leading-tight text-white">Ruang makan biasa, buat kumpul keluarga.</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/80">Meja dan kursi tertata biasa. Cukup untuk makan bareng.</p>
        <a href="https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2c231b] border border-[#2c231b]/10">
          Lihat foto lokasi
        </a>
      </div>
    </div>
  );
}

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white border border-[#2c231b]/10">
      <div className="relative h-44 w-full">
        <Image src={facility.img} alt={facility.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className="object-cover" loading="lazy" />
        <span className="absolute left-2 top-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2c231b] border border-[#2c231b]/10">{facility.badge}</span>
      </div>
      <div className="flex flex-1 items-start gap-3 p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdf8f5] border border-[#2c231b]/10 text-sm text-[#2c231b]" aria-hidden="true">
          <i className={facility.icon}></i>
        </span>
        <div>
          <h3 className="font-poppins text-sm font-bold text-[#2c231b]">{facility.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#2c231b]/65">{facility.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function Venue() {
  return (
    <section id="fasilitas" className="relative flex scroll-mt-20 flex-col justify-center overflow-hidden bg-white py-16 lg:py-24 border-y border-[#2c231b]/5">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <VenueHero />
          </Reveal>
          {FACILITIES.map((facility, idx) => (
            <Reveal key={facility.title} delay={Math.min(idx * 60, 180)} className={idx % 2 === 0 ? "" : "sm:translate-y-2"}>
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
