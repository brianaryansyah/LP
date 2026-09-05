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
    href: "#unggulan",
    sectionId: "unggulan",
    children: [
      { label: "Kisah Semangkok", href: "#unggulan", desc: "Dari gerobak 1990 sampai Karimata" },
      { label: "Keunggulan Kami", href: "#unggulan", desc: "Kaldu 8 jam, mie ditarik harian" },
      { label: "Sejarah Resep 1990", href: "#unggulan", desc: "Resep keluarga turun temurun" },
      { label: "Sertifikasi & Kualitas", href: "#testimoni", desc: "100% halal, tamu puas 4.9" },
      { label: "Tim Kami", href: "#location", desc: "Sapa kami di warung" },
    ],
  },
  {
    label: "Katalog",
    href: "#menu",
    sectionId: "menu",
    children: [
      { label: "Mie Ayam Spesial", href: "#menu", desc: "Original dan bakso favorit" },
      { label: "Bakso & Topping", href: "#menu", desc: "Kenyal, porsi melimpah" },
      { label: "Minuman Segar", href: "#menu", desc: "Teman makan mie ayam" },
    ],
  },
  {
    label: "Kerjasama",
    href: "#reservasi",
    sectionId: "reservasi",
    children: [
      {
        label: "Peluang Franchise",
        href: waLink("Halo Semangkok, saya tertarik peluang franchise."),
        desc: "Buka cabang bersama kami",
        external: true,
      },
      {
        label: "Kemitraan Supplier",
        href: waLink("Halo Semangkok, saya ingin jadi supplier."),
        desc: "Pasok bahan berkualitas",
        external: true,
      },
    ],
  },
  {
    label: "Artikel",
    href: "#unggulan",
    sectionId: "testimoni",
    children: [
      { label: "Berita & Event", href: "#testimoni", desc: "Kabar terbaru warung" },
      { label: "Tips & Resep", href: "#unggulan", desc: "Rahasia dapur Semangkok" },
    ],
  },
  {
    label: "Bantuan",
    href: "#location",
    sectionId: "location",
    children: [
      { label: "FAQ", href: "#location", desc: "Jam, lokasi, cara pesan" },
      {
        label: "Hubungi Kami",
        href: waLink("Halo Semangkok, saya butuh bantuan."),
        desc: "Respon cepat via WhatsApp",
        external: true,
      },
    ],
  },
];

export const NAVBAR_SECTION_IDS = ["home", "unggulan", "testimoni", "menu", "reservasi", "location"];
