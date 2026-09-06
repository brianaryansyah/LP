import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Features() {
  return (
    <section id="unggulan" className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <Reveal>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 lg:mb-24">
          {/* Left Collage — flat, no blob */}
          <div className="flex-1 w-full relative max-w-lg mx-auto lg:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 relative rounded-xl overflow-hidden w-full aspect-[16/9] border border-[#2c231b]/10">
                <Image src="/img/mi-ayam-kepala.jpg" alt="Ayam kecap dimasak di wajan besar" fill sizes="(max-width: 640px) 90vw, 40vw" className="object-cover" loading="lazy" quality={85} />
              </div>
              <div className="relative rounded-xl overflow-hidden w-full aspect-[4/3] border border-[#2c231b]/10">
                <Image src="/img/mi-ayam.jpg" alt="Mangkok mie ayam dengan topping ayam kecap" fill sizes="(max-width: 640px) 45vw, 20vw" className="object-cover" loading="lazy" quality={85} />
              </div>
              <div className="relative rounded-xl overflow-hidden w-full aspect-[4/3] border border-[#2c231b]/10">
                <Image src="/img/mi-ayam-bakso.jpg" alt="Mie ayam bakso dengan kuah kaldu" fill sizes="(max-width: 640px) 45vw, 20vw" className="object-cover" loading="lazy" quality={85} />
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white px-4 py-3 rounded-xl border border-[#2c231b]/10 shadow-sm">
              <span className="block text-lg font-extrabold text-[#2c231b] font-poppins leading-none">1990</span>
              <span className="text-[11px] font-medium text-[#2c231b]/60">Sejak Pasar Pagi</span>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 text-left w-full mt-8 lg:mt-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
              Mengapa Memilih Kami
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins leading-tight tracking-tight text-balance mb-4 sm:mb-6">
              Mie ayam yang dimasak harian
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#2c231b]/70 font-inter mb-8 sm:mb-10 leading-relaxed">
              Sejak 1990 di Pasar Pagi, sekarang di Jl. Karimata 40. Mie disiapkan pagi, kaldu direbus beberapa jam, ayam dimasak seperti biasa. Tidak ada yang istimewa, hanya dibuat rutin.
            </p>

            <div className="flex items-center gap-4 py-3 border-y border-[#2c231b]/10 mb-5 text-sm">
              <span className="font-bold text-[#2c231b]">Sejak 1990</span>
              <span className="text-[#2c231b]/30">•</span>
              <span className="text-[#2c231b]/70">Disiapkan pagi</span>
              <span className="text-[#2c231b]/30">•</span>
              <span className="font-bold text-[#2c231b]">4.8/5</span>
              <span className="text-[#2c231b]/60 text-xs">ulasan</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="bg-[#fdf8f5] p-4 rounded-xl flex items-start gap-3 border border-[#2c231b]/10 border-l-4 border-l-[#f5b041]">
                <i className="fas fa-clock text-sm text-[#2c231b] mt-1" aria-hidden="true"></i>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">Kaldu 8 jam</h4>
                  <p className="text-[#2c231b]/60 text-xs leading-relaxed mt-1">Tulang ayam direbus sejak subuh. Tidak pakai penyedap berlebih.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl flex items-start gap-3 border border-[#2c231b]/10">
                <i className="fas fa-utensils text-sm text-[#2c231b] mt-1" aria-hidden="true"></i>
                <div>
                  <h4 className="text-sm font-bold text-[#2c231b] font-poppins">Mie ditarik tangan</h4>
                  <p className="text-[#2c231b]/60 text-xs leading-relaxed mt-1">Adonan dibuat pagi, tekstur kenyal saat digigit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <WaveDivider fill="#fdf8f5" position="bottom" />
    </section>
  );
}