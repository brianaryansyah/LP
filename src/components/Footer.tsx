export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🍜</span>
              <h3 className="text-2xl font-bold font-poppins">Semangkok</h3>
            </div>
            <p className="text-gray-400 font-inter mb-6">
              Rasa autentik warisan keluarga sejak 1990. Menyajikan mie ayam dan bakso premium dengan bahan pilihan berkualitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition duration-300">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-gray-200">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-orange-500 transition">Menu Kami</a></li>
              <li><a href="#unggulan" className="text-gray-400 hover:text-orange-500 transition">Keunggulan</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-orange-500 transition">Lokasi & Jam Buka</a></li>
              <li><a href="#reservasi" className="text-gray-400 hover:text-orange-500 transition">Reservasi Tempat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-gray-200">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-orange-500"></i>
                <span>Jl. Raya Makan Enak No. 123<br />Jakarta Pusat 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-orange-500"></i>
                <span>0856-4073-4972</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-orange-500"></i>
                <span>hello@semangkok.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 font-inter text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Mie Ayam Semangkok. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
