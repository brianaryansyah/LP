import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Semangkok",
  description: "Admin area for Semangkok",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">🍜 Admin</h2>
        </div>
        <nav className="mt-4">
          <a
            href="/admin"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Dashboard
          </a>
          <a
            href="/admin/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Kelola Pesanan
          </a>
          <a
            href="/admin/menu"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Kelola Menu
          </a>
          <a
            href="/admin/login"
            className="block px-4 py-2 text-red-600 hover:bg-red-50 mt-auto"
          >
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
