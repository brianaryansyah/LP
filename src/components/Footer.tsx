export default function Footer() {
  return (
    <footer className="bg-transparent py-8 border-t border-amber-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-amber-900/50 font-inter text-sm">
          <p>&copy; {new Date().getFullYear()} Mie Ayam Semangkok. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
