export default function AdminOrders() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Pesanan</h1>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <input type="text" placeholder="Cari pesanan..." className="px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-orange-500" />
          <select className="px-4 py-2 rounded-lg border border-gray-200 outline-none">
            <option>Semua Status</option>
            <option>Proses</option>
            <option>Selesai</option>
            <option>Batal</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-4 px-6 font-semibold text-gray-600">ID Pesanan</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Tanggal</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Pelanggan</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Total</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Status</th>
                <th className="py-4 px-6 font-semibold text-gray-600 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium text-gray-900">#ORD-001</td>
                <td className="py-4 px-6 text-gray-600">18 Aug 2026, 12:30</td>
                <td className="py-4 px-6 text-gray-800">Budi Santoso</td>
                <td className="py-4 px-6 font-medium text-gray-900">Rp 45.000</td>
                <td className="py-4 px-6"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Proses</span></td>
                <td className="py-4 px-6 text-right">
                  <button className="text-blue-500 hover:text-blue-700 mr-3"><i className="fas fa-eye"></i></button>
                  <button className="text-green-500 hover:text-green-700"><i className="fas fa-check"></i></button>
                </td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium text-gray-900">#ORD-002</td>
                <td className="py-4 px-6 text-gray-600">18 Aug 2026, 13:15</td>
                <td className="py-4 px-6 text-gray-800">Siti Aminah</td>
                <td className="py-4 px-6 font-medium text-gray-900">Rp 120.000</td>
                <td className="py-4 px-6"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Selesai</span></td>
                <td className="py-4 px-6 text-right">
                  <button className="text-blue-500 hover:text-blue-700 mr-3"><i className="fas fa-eye"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
