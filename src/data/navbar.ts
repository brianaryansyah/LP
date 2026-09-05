export interface NavbarChild {
  label: string;
  href: string;
  desc: string;
  external?: boolean;
}

export interface NavbarEntry {
  label: string;
  href: string;
  sectionId: string;
  children?: NavbarChild[];
}

export const NAVBAR_THEME = {
  cream: "#FCF8F2",
  ink: "#1C2421",
  fresh: "#4ADE80",
  capsule: "#1A1A1A",
} as const;

const WA_NUMBER = "6285640734972";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ORDER_LINK = waLink("Halo Semangkok, saya ingin memesan.");

export const NAVBAR_ENTRIES: NavbarEntry[] = [
  { label: "Beranda", href: "/", sectionId: "home" },
  {
    label: "Tentang Kami",
    href: "/tentang/kisah",
    sectionId: "unggulan",
    children: [
      { label: "Kisah Semangkok", href: "/tentang/kisah", desc: "Dari gerobak 1990 sampai Karimata" },
      { label: "Keunggulan Kami", href: "/tentang/keunggulan", desc: "Kaldu 8 jam, mie ditarik harian" },
      { label: "Sejarah Resep 1990", href: "/tentang/sejarah", desc: "Resep keluarga turun temurun" },
      { label: "Sertifikasi & Kualitas", href: "/tentang/kualitas", desc: "100% halal, tamu puas 4.9" },
      { label: "Tim Kami", href: "/tentang/tim", desc: "Sapa kami di warung" },
    ],
  },
  {
    label: "Katalog",
    href: "/katalog/mie-ayam",
    sectionId: "menu",
    children: [
      { label: "Mie Ayam Spesial", href: "/katalog/mie-ayam", desc: "Original dan bakso favorit" },
      { label: "Bakso & Topping", href: "/katalog/bakso-topping", desc: "Kenyal, porsi melimpah" },
      { label: "Minuman Segar", href: "/katalog/minuman", desc: "Teman makan mie ayam" },
    ],
  },
  {
    label: "Kerjasama",
    href: "/kerjasama/franchise",
    sectionId: "reservasi",
    children: [
      { label: "Peluang Franchise", href: "/kerjasama/franchise", desc: "Buka cabang bersama kami" },
      { label: "Kemitraan Supplier", href: "/kerjasama/supplier", desc: "Pasok bahan berkualitas" },
    ],
  },
  {
    label: "Artikel",
    href: "/artikel/berita-event",
    sectionId: "testimoni",
    children: [
      { label: "Berita & Event", href: "/artikel/berita-event", desc: "Kabar terbaru warung" },
      { label: "Tips & Resep", href: "/artikel/tips-resep", desc: "Rahasia dapur Semangkok" },
    ],
  },
  {
    label: "Bantuan",
    href: "/bantuan/faq",
    sectionId: "location",
    children: [
      { label: "FAQ", href: "/bantuan/faq", desc: "Jam, lokasi, cara pesan" },
      { label: "Hubungi Kami", href: "/bantuan/kontak", desc: "Alamat dan WhatsApp" },
    ],
  },
];

export const NAVBAR_SECTION_IDS = ["home", "unggulan", "testimoni", "menu", "reservasi", "location"];
