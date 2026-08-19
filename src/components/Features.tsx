export default function Features() {
  return (
    <section id="unggulan" className="relative min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 lg:mb-24">
          {/* Left Collage */}
          <div className="flex-1 w-full relative max-w-lg mx-auto lg:max-w-none group">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
              <div className="col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden h-48 sm:h-64 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img src="/img/mi ayam kepala.jpg" alt="Proses Memasak" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-700"></div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-32 sm:h-48 shadow-xl transition-transform duration-700 delay-100 group-hover:-translate-y-2 group-hover:rotate-1">
                <img src="/img/bakso urat.png" alt="Bahan Segar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-32 sm:h-48 shadow-xl transition-transform duration-700 delay-200 group-hover:-translate-y-2 group-hover:-rotate-1">
                <img src="/img/bakso.png" alt="Mie Spesial" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
            
            {/* Background Blob Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#f5b041]/10 rounded-full blur-3xl -z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-[#f5b041] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col items-center justify-center border-4 border-[#fdf8f5] z-20 scale-90 sm:scale-100 origin-bottom-left animate-float">
              <span className="text-2xl sm:text-3xl font-bold text-[#2c231b] font-poppins">30+</span>
              <span className="text-xs sm:text-sm text-[#2c231b] font-bold mt-1 text-center leading-tight">Tahun<br/>Pengalaman</span>
            </div>
            
            {/* Decorative dot grid */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0">
               {[...Array(15)].map((_, i) => (
                 <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2c231b]"></div>
               ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 text-left w-full mt-8 lg:mt-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider shadow-sm border border-[#f5b041]/30">
              Mengapa Memilih Kami
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2c231b] font-poppins leading-tight mb-4 sm:mb-6">
              Pengalaman & Keahlian dalam Menyajikan Mie Ayam
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#2c231b]/70 font-inter mb-8 sm:mb-10 leading-relaxed">
              Kami telah mendedikasikan diri selama lebih dari 30 tahun untuk meracik mie ayam dan bakso terbaik. Setiap mangkok yang kami sajikan adalah bukti dari passion dan komitmen kami terhadap kualitas.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#f5b041]/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 hover:-translate-y-2 transition-transform duration-300 shadow-md border border-transparent hover:border-[#f5b041]/30 cursor-default">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f5b041]/20 flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl text-[#f5b041]">👨‍🍳</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#2c231b] font-poppins mb-1">Koki Berpengalaman</h4>
                  <p className="text-[#2c231b]/70 text-xs sm:text-sm leading-relaxed">Resep rahasia keluarga yang dijaga turun temurun.</p>
                </div>
              </div>

              <div className="bg-white border border-[#2c231b]/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 hover:-translate-y-2 transition-transform duration-300 shadow-md cursor-default">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#fdf8f5] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-xl sm:text-2xl text-[#f5b041]">🥬</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#2c231b] font-poppins mb-1">Bahan Baku Segar</h4>
                  <p className="text-[#2c231b]/70 text-xs sm:text-sm leading-relaxed">Kami hanya menggunakan daging ayam segar pilihan setiap harinya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="bg-gradient-to-br from-[#f5b041]/20 to-[#f5b041]/5 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 relative mt-8 sm:mt-12 mx-auto max-w-4xl shadow-2xl border border-[#f5b041]/20 hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 opacity-10 animate-pulse">
            <i className="fas fa-quote-right text-6xl sm:text-8xl text-[#f5b041]"></i>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-[#2c231b] font-poppins font-medium leading-relaxed mb-8 sm:mb-10 relative z-10 italic">
            "Sebagai pecinta mie ayam, saya selalu mengandalkan Semangkok untuk memuaskan selera saya. Tekstur mie yang kenyal, potongan ayam yang melimpah, dan kuah kaldu yang gurih tidak pernah mengecewakan."
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sarah Johnson" className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="font-bold text-[#2c231b] font-poppins text-sm sm:text-base">Sarah Johnson</h5>
              <p className="text-[#2c231b]/60 text-xs sm:text-sm">Food Blogger</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
