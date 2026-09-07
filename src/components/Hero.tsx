import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-24 sm:pt-32 sm:pb-36 hero-gradient-bg overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Content Area */}
          <div className="flex-1 text-left w-full max-w-2xl lg:max-w-none relative z-20">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[#2c231b] font-poppins leading-[1.1] mb-6 tracking-tight">
              Kelezatan <span className="text-[#f5b041] relative whitespace-nowrap">
                Mie Ayam
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#f5b041]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br />
              Dalam Setiap Suapan
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#2c231b]/80 font-inter mb-8 max-w-2xl leading-relaxed">
              Mie kenyal, kuah kaldu ayam gurih, topping ayam kecap melimpah. Resep keluarga sejak 1990, dimasak harian dan rasa selalu sama.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#menu" className="inline-flex items-center gap-2 bg-[#2c231b] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#f5b041] hover:text-[#2c231b] transition-colors duration-200 border border-transparent">
                Pesan Sekarang <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
              </a>
              <a href="#location" className="inline-flex items-center gap-2 bg-white text-[#2c231b] px-6 py-3 rounded-full font-bold text-sm border border-[#2c231b]/10 hover:border-[#2c231b]/20 transition-colors duration-200">
                Lihat Lokasi
              </a>
            </div>
            
            {/* Trust Indicators: proof of craft, not vanity metrics */}
            <div className="mt-8 flex items-center gap-3 pt-5 border-t border-[#2c231b]/10 text-xs sm:text-sm">
              <span className="rounded-full border border-[#2c231b]/10 bg-white px-3 py-1.5 font-semibold text-[#2c231b]">Sejak 1990</span>
              <span className="text-[#2c231b]/60">Pasar Pagi • Karimata • Ditarik pagi • Kaldu 8 jam</span>
            </div>
          </div>

          {/* Right Image Area — flat paper, no gradient blob */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            <div className="w-[90%] sm:w-[85%] max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden relative border border-[#2c231b]/10 bg-white shadow-sm">
              <Image
                src="/img/mi-ayam-bakso.jpg"
                alt="Mangkok mie ayam bakso dengan topping melimpah"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 480px"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#2c231b] border border-[#2c231b]/10 shadow-sm">
                100% Halal
              </span>
              <span className="absolute top-3 right-3 rounded-full bg-[#2c231b] px-3 py-1.5 text-xs font-bold text-white">
                4.8/5 • Ulasan
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <WaveDivider fill="#ffffff" position="bottom" />
    </section>
  );
}
