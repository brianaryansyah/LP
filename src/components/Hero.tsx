export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-40 overflow-hidden bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text */}
          <div className="flex-1 text-left animate__animated animate__fadeInLeft">
            <div className="inline-block px-4 py-2 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-semibold text-sm mb-6">
              Selamat Datang di Semangkok
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#2c231b] font-poppins leading-[1.1] mb-6">
              Pilihan Utama <br/>
              Pecinta Mie Ayam
            </h2>
            <p className="text-lg text-[#2c231b]/80 mb-8 font-inter max-w-lg leading-relaxed">
              Temukan kelezatan mie ayam autentik dengan resep warisan keluarga yang sudah teruji sejak 1990. Kepuasan Anda adalah prioritas kami.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f5b041] text-[#2c231b] px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition flex items-center justify-center gap-2 shadow-lg shadow-[#f5b041]/30">
                Pesan Sekarang <i className="fas fa-arrow-right text-sm"></i>
              </button>
              <a
                href="#location"
                className="bg-transparent border-2 border-[#2c231b] text-[#2c231b] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#2c231b] hover:text-white transition flex items-center justify-center gap-2"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-end relative animate__animated animate__fadeInRight">
            <div className="w-full max-w-[600px] h-[500px] rounded-3xl overflow-hidden relative shadow-2xl">
              <img
                src="/img/mi ayam bakso.jpg"
                alt="Mie Ayam Premium"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 lg:h-32 text-[#2c231b] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
