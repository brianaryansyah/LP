import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 sm:pt-32 sm:pb-32 bg-[#fdf8f5] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] sm:w-[40%] aspect-square bg-[#f5b041]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] sm:w-[40%] aspect-square bg-[#e09132]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Area */}
          <div className="flex-1 text-left w-full max-w-2xl lg:max-w-none animate__animated animate__fadeInUp relative z-20">
            
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
              Cita rasa autentik yang memanjakan lidah ✦ Perpaduan sempurna antara mie kenyal, kaldu gurih yang kaya rempah, dan potongan ayam melimpah ✦ Pilihan utama pecinta kuliner sejati.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href="#menu" className="group flex items-center gap-4 bg-[#f5b041] text-[#2c231b] pl-6 pr-2 py-2 rounded-full font-bold text-base hover:bg-[#e09132] transition-all duration-300 shadow-xl shadow-[#f5b041]/20 hover:-translate-y-1">
                Pesan Sekarang 
                <div className="w-10 h-10 bg-white text-[#2c231b] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <i className="fas fa-arrow-up text-sm"></i>
                </div>
              </a>
              <a href="#location" className="group flex items-center gap-3 bg-transparent text-[#2c231b] px-6 py-3 rounded-full font-bold text-base transition-all duration-300 hover:bg-[#f5b041]/10 hover:-translate-y-0.5">
                Lihat Lokasi
                <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 flex items-center gap-6 pt-6 border-t border-[#2c231b]/10">
              <div className="flex -space-x-3">
                <Image className="w-10 h-10 rounded-full border-2 border-[#fdf8f5] object-cover" src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=100&h=100&fit=crop" alt="Pelanggan Semangkok" width={40} height={40} />
                <Image className="w-10 h-10 rounded-full border-2 border-[#fdf8f5] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Pelanggan Semangkok" width={40} height={40} />
                <Image className="w-10 h-10 rounded-full border-2 border-[#fdf8f5] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Pelanggan Semangkok" width={40} height={40} />
              </div>
              <div>
                <div className="font-bold text-[#2c231b] font-poppins text-sm sm:text-base">Ulasan Nyata Pelanggan</div>
                <div className="text-xs sm:text-sm text-[#2c231b]/60 font-medium">Berdasarkan 17+ Review Google Maps</div>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            
            {/* Aesthetic Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[80%] aspect-square bg-[#f5b041] rounded-[4rem] opacity-60 shadow-2xl z-0 transition-transform duration-700 hover:scale-[1.02]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[80%] aspect-square bg-[#2c231b] rounded-[4rem] opacity-10 shadow-2xl z-0"></div>

            {/* Main Image Container */}
            <div className="w-[90%] sm:w-[85%] max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl z-10 border-8 border-white bg-white group">
              <Image
                src="/img/mi-ayam-bakso.jpg"
                alt="Mie Ayam Premium"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 500px"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
            </div>
            
            {/* Absolute Badges - Bulletproof Positioning */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-4 sm:left-10 bg-white px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-2xl z-30 flex items-center gap-3 sm:gap-4 border border-gray-100 animate-float">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 shadow-inner">
                <i className="fas fa-certificate text-2xl"></i>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-bold text-[#2c231b] leading-tight">100% Halal</span>
                <span className="text-xs text-[#2c231b]/60 leading-tight">Sertifikasi Resmi</span>
              </div>
            </div>

            <div className="absolute top-10 sm:top-20 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl z-30 flex items-center gap-3 border border-white/50 animate-float" style={{ animationDelay: '1s' }}>
               <div className="text-[#f5b041] flex text-sm">
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>
               <span className="font-bold text-[#2c231b] font-poppins text-sm sm:text-base">5.0/5</span>
            </div>

          </div>
        </div>
      </div>
      
      {/* Wavy bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 sm:h-16 md:h-24 lg:h-32 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
