export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Pesanan Hari Ini</h3>
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">36</p>
          <p className="text-sm text-green-500 mt-2"><i className="fas fa-arrow-up"></i> 12% dari kemarin</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Menu Terjual</h3>
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
              <i className="fas fa-utensils"></i>
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">92</p>
          <p className="text-sm text-green-500 mt-2"><i className="fas fa-arrow-up"></i> 8% dari kemarin</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Pendapatan Hari Ini</h3>
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
              <i className="fas fa-wallet"></i>
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">Rp 2.050.000</p>
          <p className="text-sm text-green-500 mt-2"><i className="fas fa-arrow-up"></i> 15% dari kemarin</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <h3 className="text-lg font-semibold text-gray-900 mb-4">Pesanan Terbaru</h3>
         <div className="overflow-x-auto">
           <table className="w-full text-left">
             <thead>
               <tr className="border-b border-gray-200">
                 <th className="py-3 px-4 font-semibold text-gray-600">ID</th>
                 <th className="py-3 px-4 font-semibold text-gray-600">Pelanggan</th>
                 <th className="py-3 px-4 font-semibold text-gray-600">Total</th>
                 <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
               </tr>
             </thead>
             <tbody>
               <tr className="border-b border-gray-50">
                 <td className="py-3 px-4 text-gray-800">#ORD-001</td>
                 <td className="py-3 px-4 text-gray-800">Budi Santoso</td>
                 <td className="py-3 px-4 text-gray-800">Rp 45.000</td>
                 <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Proses</span></td>
               </tr>
               <tr className="border-b border-gray-50">
                 <td className="py-3 px-4 text-gray-800">#ORD-002</td>
                 <td className="py-3 px-4 text-gray-800">Siti Aminah</td>
                 <td className="py-3 px-4 text-gray-800">Rp 120.000</td>
                 <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Selesai</span></td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
}
