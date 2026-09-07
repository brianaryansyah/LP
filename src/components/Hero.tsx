import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-24 sm:pt-32 sm:pb-36 hero-gradient-bg overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Content Area */}
          <div className="flex-1 text-left w-full max-w-2xl lg:max-w-none relative z-20">
            
            {/* Main Heading stagger 1 like Honea hero */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[#2c231b] font-poppins leading-[1.1] mb-6 tracking-tight animate-fadeUp" style={{ animationDelay: "80ms" }}>
              Kelezatan <span className="text-[#f5b041] relative whitespace-nowrap">
                Mie Ayam
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#f5b041]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" className="hero-underline" />
                </svg>
              </span> <br />
              Dalam Setiap Suapan
            </h1>
            
            {/* Description stagger 2 */}
            <p className="text-base sm:text-lg lg:text-xl text-[#2c231b]/80 font-inter mb-8 max-w-2xl leading-relaxed animate-fadeUp" style={{ animationDelay: "220ms" }}>
              Mie kenyal, kuah kaldu ayam gurih, topping ayam kecap melimpah. Resep keluarga yang dijaga, dimasak harian dan rasa selalu sama.
            </p>
            
            {/* Action Buttons stagger 3 */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fadeUp" style={{ animationDelay: "360ms" }}>
              <a href="#menu" className="inline-flex items-center gap-2 bg-[#2c231b] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#f5b041] hover:text-[#2c231b] transition-colors duration-200 border border-transparent shadow-[0_8px_24px_rgba(44,35,27,0.18)] hover:shadow-[0_12px_32px_rgba(44,35,27,0.22)] hover:-translate-y-0.5 transition-[transform,box-shadow,background-color,color]">
                Pesan Sekarang <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
              </a>
              <a href="#location" className="inline-flex items-center gap-2 bg-white text-[#2c231b] px-6 py-3 rounded-full font-bold text-sm border border-[#2c231b]/10 hover:border-[#2c231b]/20 transition-colors duration-200 bg-white/80 backdrop-blur-sm">
                Lihat Lokasi
              </a>
            </div>
            
            {/* Trust Indicators stagger 4 */}
            <div className="mt-8 flex items-center gap-3 pt-5 border-t border-[#2c231b]/10 text-xs sm:text-sm animate-fadeUp" style={{ animationDelay: "500ms" }}>
              <span className="rounded-full border border-[#2c231b]/10 bg-white px-3 py-1.5 font-semibold text-[#2c231b]">Dibuat Harian</span>
              <span className="text-[#2c231b]/60">Karimata • Ditarik pagi • Kaldu 8 jam</span>
            </div>
          </div>

          {/* Right Image Area Honea parity: float + soft glow */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
              <div className="h-[380px] w-[380px] rounded-full bg-[#f5b041]/25 blur-[70px]" />
              <div className="absolute h-[280px] w-[280px] rounded-full bg-white/80 blur-[40px]" />
            </div>
            <div className="w-[90%] sm:w-[85%] max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden relative border border-[#2c231b]/10 bg-white shadow-[0_20px_50px_-16px_rgba(44,35,27,0.18)] animate-hero-float">
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
