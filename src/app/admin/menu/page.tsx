export default function AdminMenu() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Menu</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition">
          <i className="fas fa-plus mr-2"></i> Tambah Menu
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <input type="text" placeholder="Cari menu..." className="px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-orange-500" />
          <select className="px-4 py-2 rounded-lg border border-gray-200 outline-none">
            <option>Semua Kategori</option>
            <option>Mie Ayam</option>
            <option>Bakso</option>
            <option>Minuman</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-4 px-6 font-semibold text-gray-600">Gambar</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Nama Menu</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Kategori</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Harga</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Status</th>
                <th className="py-4 px-6 font-semibold text-gray-600 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=100&h=100&fit=crop" alt="Mie Ayam" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="py-4 px-6 font-medium text-gray-900">Mie Ayam Original</td>
                <td className="py-4 px-6 text-gray-600">Mie Ayam</td>
                <td className="py-4 px-6 font-medium text-gray-900">Rp 15.000</td>
                <td className="py-4 px-6"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Tersedia</span></td>
                <td className="py-4 px-6 text-right space-x-3">
                  <button className="text-blue-500 hover:text-blue-700"><i className="fas fa-edit"></i></button>
                  <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100&h=100&fit=crop" alt="Es Teh" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="py-4 px-6 font-medium text-gray-900">Es Teh Manis</td>
                <td className="py-4 px-6 text-gray-600">Minuman</td>
                <td className="py-4 px-6 font-medium text-gray-900">Rp 5.000</td>
                <td className="py-4 px-6"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Tersedia</span></td>
                <td className="py-4 px-6 text-right space-x-3">
                  <button className="text-blue-500 hover:text-blue-700"><i className="fas fa-edit"></i></button>
                  <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
