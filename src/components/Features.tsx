export default function Features() {
  return (
    <section id="unggulan" className="py-24 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          {/* Left Collage */}
          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl overflow-hidden h-64 shadow-lg">
                <img src="/img/mi ayam kepala.jpg" alt="Proses Memasak" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-lg">
                <img src="/img/bakso urat.png" alt="Bahan Segar" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-lg">
                <img src="/img/bakso.png" alt="Mie Spesial" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#f5b041] p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center border-4 border-[#fdf8f5] z-10">
              <span className="text-3xl font-bold text-[#2c231b] font-poppins">30+</span>
              <span className="text-sm text-[#2c231b] font-bold mt-1">Tahun Pengalaman</span>
            </div>
            
            {/* Decorative dot grid */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-20">
               {[...Array(15)].map((_, i) => (
                 <div key={i} className="w-2 h-2 rounded-full bg-[#2c231b]"></div>
               ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f5b041]/20 text-[#2c231b] font-bold text-xs mb-4 uppercase tracking-wider">
              Mengapa Memilih Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c231b] font-poppins leading-tight mb-6">
              Pengalaman & Keahlian dalam Menyajikan Mie Ayam
            </h2>
            <p className="text-[#2c231b]/70 font-inter mb-10 leading-relaxed text-lg">
              Kami telah mendedikasikan diri selama lebih dari 30 tahun untuk meracik mie ayam dan bakso terbaik. Setiap mangkok yang kami sajikan adalah bukti dari passion dan komitmen kami terhadap kualitas.
            </p>

            <div className="space-y-6">
              <div className="bg-[#f5b041]/10 p-6 rounded-3xl flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#f5b041]/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl text-[#f5b041]">👨‍🍳</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2c231b] font-poppins mb-1">Koki Berpengalaman</h4>
                  <p className="text-[#2c231b]/60 text-sm">Resep rahasia keluarga yang dijaga turun temurun.</p>
                </div>
              </div>

              <div className="bg-transparent border border-[#2c231b]/10 p-6 rounded-3xl flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-2xl text-[#f5b041]">🥬</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2c231b] font-poppins mb-1">Bahan Baku Segar</h4>
                  <p className="text-[#2c231b]/60 text-sm">Kami hanya menggunakan daging ayam segar pilihan setiap harinya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="bg-[#f5b041]/10 rounded-[3rem] p-10 md:p-16 relative mt-12 mx-auto max-w-4xl">
          <div className="absolute top-10 right-10 opacity-10">
            <i className="fas fa-quote-right text-8xl text-[#f5b041]"></i>
          </div>
          <p className="text-xl md:text-2xl text-[#2c231b] font-poppins font-medium leading-relaxed mb-10 relative z-10 italic">
            "Sebagai pecinta mie ayam, saya selalu mengandalkan Semangkok untuk memuaskan selera saya. Tekstur mie yang kenyal, potongan ayam yang melimpah, dan kuah kaldu yang gurih tidak pernah mengecewakan."
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sarah Johnson" className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="font-bold text-[#2c231b] font-poppins">Sarah Johnson</h5>
              <p className="text-[#2c231b]/60 text-sm">Food Blogger</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
