export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-40 overflow-hidden bg-[#fdf8f5]">
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f8efe6] rounded-br-[40%] -z-0"></div>
      <div className="absolute top-1/4 right-0 w-1/2 h-full bg-[#f5b041] transform -skew-x-12 translate-x-20 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="flex-1 text-left animate__animated animate__fadeInLeft">
            <div className="inline-block px-4 py-2 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-6 tracking-wide">
              Selamat Datang di Semangkok
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#2c231b] font-poppins leading-[1.15] mb-6 tracking-tight">
              Pilihan Utama <br/>
              Pecinta Mie <br/>
              Ayam
            </h2>
            <p className="text-base lg:text-lg text-[#2c231b]/70 mb-10 font-inter max-w-lg leading-relaxed">
              Temukan kelezatan mie ayam autentik dengan resep warisan keluarga yang sudah teruji sejak 1990. Kepuasan Anda adalah prioritas kami.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#f5b041] text-[#2c231b] pl-6 pr-2 py-2 rounded-full font-bold text-base hover:bg-orange-400 transition flex items-center gap-4 shadow-xl">
                Pesan Sekarang 
                <div className="w-10 h-10 bg-[#2c231b] text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-arrow-right text-sm"></i>
                </div>
              </button>
              <a
                href="#location"
                className="bg-transparent border border-[#2c231b]/20 text-[#2c231b] px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#2c231b] hover:text-white transition flex items-center justify-center"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-end relative animate__animated animate__fadeInRight">
            <div className="w-full max-w-[600px] h-[500px] rounded-[2rem] overflow-hidden relative shadow-2xl z-10 border-[10px] border-[#fdf8f5]">
              <img
                src="/img/mi ayam bakso.jpg"
                alt="Mie Ayam Premium"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dashed curve detail (similar to Beekeeper image) */}
            <svg className="absolute -top-10 -right-10 w-48 h-48 text-white opacity-50 z-0 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M0,100 C0,50 50,0 100,0" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
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
