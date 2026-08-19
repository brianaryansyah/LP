export default function Footer() {
  return (
    <footer className="bg-[#2c231b] text-[#fdf8f5] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#fdf8f5]/10 pb-12 mb-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer">
              <div className="bg-[#f5b041] p-2 rounded-xl">
                <span className="text-2xl text-white block leading-none">🍜</span>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[#fdf8f5]">Semangkok</h3>
            </div>
            <p className="text-[#fdf8f5]/60 font-inter mb-8 text-sm leading-relaxed pr-4">
              Pilihan utama pecinta mie ayam. Rasakan kelezatan resep autentik yang telah dipercaya sejak 1990.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5b041] text-[#2c231b] flex items-center justify-center hover:bg-white transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between md:justify-center">
            <div>
              <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#home" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Home</a></li>
                <li><a href="#unggulan" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">About Us</a></li>
                <li><a href="#menu" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Our Menu</a></li>
                <li><a href="#location" className="text-[#fdf8f5]/70 hover:text-[#f5b041] transition">Services</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-[#f5b041]">Newsletter Sign Up</h4>
            <p className="text-[#fdf8f5]/60 text-sm mb-6">
              Dapatkan info promo dan menu baru langsung ke email Anda.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#3b3128] text-[#fdf8f5] px-6 py-4 rounded-full border border-[#fdf8f5]/10 focus:outline-none focus:border-[#f5b041] transition text-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-[#f5b041] text-[#2c231b] px-6 rounded-full font-bold text-sm hover:bg-white transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-[#fdf8f5]/40 font-inter text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Mie Ayam Semangkok. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#f5b041] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#f5b041] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
