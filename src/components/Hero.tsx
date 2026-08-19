export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 sm:pt-32 sm:pb-32 overflow-hidden bg-[#fdf8f5]">
      
      {/* Background Shapes */}
      {/* Left blob - scaled down slightly on mobile so it forms a nice curve */}
      <div className="absolute top-0 left-0 w-[150%] md:w-1/2 h-[80%] md:h-full bg-[#f8efe6] rounded-br-[40%] md:rounded-br-[50%] -z-0 transform -translate-x-[20%] md:translate-x-0"></div>
      
      {/* Right diagonal - positioned better for mobile */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[60%] md:h-full bg-[#f5b041] transform -skew-y-6 md:-skew-x-12 translate-y-10 md:translate-y-0 md:translate-x-20 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Text */}
          <div className="flex-1 text-left animate__animated animate__fadeInLeft w-full">
            <div className="inline-block px-4 py-2 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 sm:mb-6 tracking-wide shadow-sm border border-[#f5b041]/30">
              Selamat Datang di Semangkok
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#2c231b] font-poppins leading-[1.15] mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Pilihan Utama <br className="hidden sm:block" />
              Pecinta Mie <br className="hidden sm:block" />
              Ayam
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#2c231b]/80 mb-8 sm:mb-10 font-inter max-w-lg leading-relaxed">
              Temukan kelezatan mie ayam autentik dengan resep warisan keluarga yang sudah teruji sejak 1990. Kepuasan Anda adalah prioritas kami.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#f5b041] text-[#2c231b] pl-5 sm:pl-6 pr-2 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-[#e09132] transition flex items-center gap-3 sm:gap-4 shadow-xl hover:-translate-y-1 transform duration-300">
                Pesan Sekarang 
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2c231b] text-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
                </div>
              </button>
              <a
                href="#location"
                className="bg-white/50 backdrop-blur-sm border-2 border-[#2c231b] text-[#2c231b] px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-[#2c231b] hover:text-white transition flex items-center justify-center hover:-translate-y-1 transform duration-300 shadow-md"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Image with Float Animation */}
          <div className="flex-1 w-full flex justify-center md:justify-end relative animate__animated animate__fadeInRight mt-8 lg:mt-0 animate-float">
            <div className="w-[90%] sm:w-full max-w-[500px] aspect-square sm:aspect-auto sm:h-[400px] md:h-[500px] rounded-full sm:rounded-[3rem] overflow-hidden relative shadow-2xl z-10 border-[6px] sm:border-[10px] border-[#fdf8f5]">
              <img
                src="/img/mi ayam bakso.jpg"
                alt="Mie Ayam Premium"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Dashed curve detail */}
            <svg className="absolute -bottom-4 -left-4 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-48 sm:h-48 text-white opacity-60 z-20 pointer-events-none animate-pulse" viewBox="0 0 100 100" fill="none">
              <path d="M0,100 C0,50 50,0 100,0" stroke="currentColor" strokeWidth="3" strokeDasharray="6,6" />
            </svg>
            
            {/* Floating Badge on Image */}
            <div className="absolute top-4 right-0 sm:top-10 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl z-30 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">🍜</span>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#2c231b]">100% Halal</div>
                  <div className="text-[10px] sm:text-xs text-[#2c231b]/60">Bahan Pilihan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 sm:h-16 md:h-24 lg:h-32 text-[#2c231b] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
