export default function AdminOrders() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#2c231b]">Kelola Pesanan</h1>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-[#2c231b]/5 overflow-hidden">
        <div className="p-4 border-b border-[#2c231b]/5 flex justify-between items-center bg-[#fdf8f5]">
          <input type="text" placeholder="Cari pesanan..." className="px-4 py-2 rounded-lg border border-[#2c231b]/10 outline-none focus:border-[#f5b041]" />
          <select className="px-4 py-2 rounded-lg border border-[#2c231b]/10 outline-none">
            <option>Semua Status</option>
            <option>Proses</option>
            <option>Selesai</option>
            <option>Batal</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#2c231b]/5 bg-white">
                <th className="py-4 px-6 font-semibold text-[#2c231b]">ID Pesanan</th>
                <th className="py-4 px-6 font-semibold text-[#2c231b]">Tanggal</th>
                <th className="py-4 px-6 font-semibold text-[#2c231b]">Pelanggan</th>
                <th className="py-4 px-6 font-semibold text-[#2c231b]">Total</th>
                <th className="py-4 px-6 font-semibold text-[#2c231b]">Status</th>
                <th className="py-4 px-6 font-semibold text-[#2c231b] text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2c231b]/10 hover:bg-[#fdf8f5]/30">
                <td className="py-4 px-6 font-medium text-[#2c231b]">#ORD-001</td>
                <td className="py-4 px-6 text-[#2c231b]">18 Aug 2026, 12:30</td>
                <td className="py-4 px-6 text-[#2c231b]">Budi Santoso</td>
                <td className="py-4 px-6 font-medium text-[#2c231b]">Rp 45.000</td>
                <td className="py-4 px-6">
                  <span className="bg-[#f5b041]/10 text-[#f5b041] px-3 py-1 rounded-full text-sm font-medium">Proses</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-[#f5b041] hover:text-[#e09132] mr-3"><i className="fas fa-eye"></i></button>
                  <button className="text-[#f5b041] hover:text-[#e09132]"><i className="fas fa-check"></i></button>
                </td>
              </tr>
              <tr className="border-b border-[#2c231b]/10 hover:bg-[#fdf8f5]/30">
                <td className="py-4 px-6 font-medium text-[#2c231b]">#ORD-002</td>
                <td className="py-4 px-6 text-[#2c231b]">18 Aug 2026, 13:15</td>
                <td className="py-4 px-6 text-[#2c231b]">Siti Aminah</td>
                <td className="py-4 px-6 font-medium text-[#2c231b]">Rp 120.000</td>
                <td className="py-4 px-6">
                  <span className="bg-[#fdf8f5]/10 text-[#2c231b] px-3 py-1 rounded-full text-sm font-medium">Selesai</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-[#f5b041] hover:text-[#e09132] mr-3"><i className="fas fa-eye"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}