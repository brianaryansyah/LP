import Navbar from "@/components/Navbar";
import SubHero from "@/components/SubHero";
import RelatedPages from "@/components/RelatedPages";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface TentangLayoutProps {
  eyebrow: string;
  title: string;
  desc: string;
  section?: string;
  children: React.ReactNode;
}

export default function TentangLayout({ eyebrow, title, desc, section = "Tentang Kami", children }: TentangLayoutProps) {
  return (
    <main className="relative min-h-screen bg-[#fdf8f5]">
      <Navbar />
      <SubHero eyebrow={eyebrow} title={title} desc={desc} section={section} />
      {children}
      <RelatedPages />
      <PageCta title="Mampir dan rasakan sendiri" desc="Cerita paling enak dibuktikan dengan semangkok mie hangat. Kami buka tiap hari 10.00 sampai 22.00 WIB." />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
