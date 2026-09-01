import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Testimonial() {
  const googleMapsLink = "https://share.google/QOCQKq5zvoVVkb4pm";

  return (
    <section id="testimoni" className="relative py-16 lg:py-24 bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 pb-12 sm:pb-16">
        <Reveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
            Testimoni
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins leading-tight tracking-tight text-balance mb-8 sm:mb-12">
            Apa Kata Pelanggan Kami
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-gradient-to-br from-[#f5b041]/20 to-[#f5b041]/5 rounded-3xl p-8 sm:p-12 md:p-16 relative mx-auto max-w-4xl shadow-2xl border border-[#f5b041]/20 hover:scale-[1.02] transition-transform duration-500 text-left">
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 opacity-10 animate-pulse">
              <i className="fas fa-quote-right text-6xl sm:text-8xl text-[#f5b041]"></i>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-[#2c231b] font-inter font-medium leading-relaxed mb-8 sm:mb-10 relative z-10 italic">
              &ldquo;Mie ayam langganan.. rasanya enak.. harga murah meriah.. mie nya produksi sendiri katanya.. bisa buat tempat arisan dan kumpul bareng temen-temen, ownernya juga ramah bgt, bisa req sesuai kemauan kita.. lokasinya strategis, daya tampung skitar 40 orang..&rdquo;
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                  alt="Lutfi Muzayyanah"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h5 className="font-bold text-[#2c231b] font-poppins text-sm sm:text-base">Lutfi Muzayyanah</h5>
                <p className="text-[#2c231b]/60 text-xs sm:text-sm font-medium">Ulasan Google Maps</p>
              </div>
            </div>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baca ulasan lengkap di Google Maps"
              className="mt-6 text-[#f5b041] font-bold underline hover:text-[#e09132] transition text-sm sm:text-base hover:scale-105 transform"
            >
              Baca ulasan lengkap di Google Maps
            </a>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#2c231b" position="bottom" />
    </section>
  );
}