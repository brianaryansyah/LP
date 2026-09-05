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

const WA_NUMBER = "6285640734972";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ORDER_LINK = waLink("Halo Semangkok, saya ingin memesan.");

export const NAVBAR_ENTRIES: NavbarEntry[] = [
  { label: "Beranda", href: "#home", sectionId: "home" },
  {
    label: "Tentang Kami",
    href: "#unggulan",
    sectionId: "unggulan",
    children: [
      { label: "Cerita Kami", href: "#unggulan", desc: "Dari gerobak 1990 sampai Karimata" },
      { label: "Kata Pelanggan", href: "#testimoni", desc: "Cerita jujur dari meja sebelah" },
      { label: "Lokasi Warung", href: "#location", desc: "Karimata No.40, Pemalang" },
    ],
  },
  {
    label: "Katalog",
    href: "#menu",
    sectionId: "menu",
    children: [
      { label: "Menu Pilihan", href: "#menu", desc: "Paling sering dipesan" },
      { label: "Reservasi Meja", href: "#reservasi", desc: "Pesan tempat dulu" },
      { label: "Layanan & Lokasi", href: "#location", desc: "Antar, makan di tempat" },
    ],
  },
  {
    label: "Kerjasama",
    href: "#reservasi",
    sectionId: "reservasi",
    children: [
      {
        label: "Kemitraan Warung",
        href: waLink("Halo Semangkok, saya tertarik kemitraan warung."),
        desc: "Tanya skema kerjasama",
        external: true,
      },
      {
        label: "Catering & Acara",
        href: waLink("Halo Semangkok, saya ingin pesan catering atau acara."),
        desc: "Arisan, ulang tahun, kantor",
        external: true,
      },
      {
        label: "Hubungi Kami",
        href: waLink("Halo Semangkok, saya ingin bertanya."),
        desc: "Respon cepat via WhatsApp",
        external: true,
      },
    ],
  },
  {
    label: "Artikel",
    href: "#unggulan",
    sectionId: "testimoni",
    children: [
      { label: "Cerita Dapur", href: "#unggulan", desc: "Kaldu 8 jam, mie harian" },
      { label: "Ulasan Pelanggan", href: "#testimoni", desc: "Rating 4.9 dari tamu" },
      {
        label: "Google Maps",
        href: "https://share.google/QOCQKq5zvoVVkb4pm",
        desc: "Baca semua ulasan",
        external: true,
      },
    ],
  },
  {
    label: "Bantuan",
    href: "#location",
    sectionId: "location",
    children: [
      { label: "Cara Pesan", href: "#menu", desc: "Pilih menu favorit" },
      { label: "Reservasi", href: "#reservasi", desc: "Booking biar kebagian" },
      {
        label: "Chat WhatsApp",
        href: waLink("Halo Semangkok, saya butuh bantuan."),
        desc: "Tanya apa saja",
        external: true,
      },
      { label: "Lokasi & Jam", href: "#location", desc: "Buka tiap hari 10.00-22.00" },
    ],
  },
];

export const NAVBAR_SECTION_IDS = ["home", "unggulan", "testimoni", "menu", "reservasi", "location"];
